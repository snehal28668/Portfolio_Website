import { NextResponse } from "next/server"

const DEFAULT_USERNAME = "snehal28668"
const USERNAME =
  process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USERNAME || DEFAULT_USERNAME
const TOKEN = process.env.GITHUB_TOKEN
const EXCLUDED_REPOS = new Set([
  "mind",
  "snehal-portfolio",
  "mind-ease",
  "mind-ease-",
  "special-code-",
  "portfolio",
  "resume",
]) // repos to hide from the projects list

export async function GET() {
  if (!USERNAME) {
    return NextResponse.json({ error: "Missing GitHub username. Set GITHUB_USERNAME." }, { status: 500 })
  }

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-site",
  }

  if (TOKEN) {
    headers.Authorization = `Bearer ${TOKEN}`
  }

  const response = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=50`,
    {
      headers,
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    const message = await response.text()
    return NextResponse.json(
      {
        error: "Failed to fetch repositories from GitHub.",
        details: message,
      },
      { status: response.status }
    )
  }

  const repos = await response.json()

  const filteredRepos = repos.filter((repo: any) => !EXCLUDED_REPOS.has(String(repo.name || "").toLowerCase()))

  // Custom project images mapping - add your project names and image paths here
  const customImages: Record<string, string> = {
    "ai-interview": "/ai-interview.jpg",
    "amazon-clone": "/amazon-clone.jpg",
    "analytics-dashboard": "/analytics-dashboard.png",
    "chat-ai-app": "/chat-ai-app.jpg",
    "collaboration-tool": "/collaboration-tool.jpg",
    "currency-exchange": "/currency-exchange.jpg",
    "ecommerce-store": "/ecommerce-store.jpg",
    "ml-model": "/ml-model.jpg",
    "password-manager": "/password-manager.jpg",
    "task-manager": "/task-manager.jpg",
  }

  const mapped = filteredRepos.map((repo: any) => {
    const tags = Array.from(
      new Set(
        [
          repo.language,
          ...(Array.isArray(repo.topics) ? repo.topics : []),
        ].filter(Boolean)
      )
    )

    // Use custom image if available, otherwise fallback to GitHub opengraph
    const repoName = String(repo.name || "").toLowerCase()
    const customImage = customImages[repoName]
    const defaultImage = repo.full_name ? `https://opengraph.githubassets.com/1/${repo.full_name}` : undefined

    return {
      id: repo.id,
      title: repo.name,
      description: repo.description || "No description provided.",
      tags,
      category: repo.language || "Other",
      image: customImage || defaultImage,
      github: repo.html_url,
      live: repo.homepage || repo.html_url,
    }
  })

  return NextResponse.json(mapped)
}
