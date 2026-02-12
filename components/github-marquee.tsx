"use client"

import { useEffect, useMemo, useState } from "react"

type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  fork: boolean
}

type FetchState = "loading" | "ready" | "empty" | "error"

const USERNAME = "snehal28668"
const API_URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30`

export default function GitHubMarquee() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [state, setState] = useState<FetchState>("loading")

  useEffect(() => {
    let cancelled = false

    const loadRepos = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })

        if (!response.ok) {
          throw new Error(String(response.status))
        }

        const data: GitHubRepo[] = await response.json()
        const nonForkRepos = data.filter((repo) => !repo.fork)

        if (!nonForkRepos.length) {
          if (!cancelled) {
            setState("empty")
          }
          return
        }

        if (!cancelled) {
          setRepos(nonForkRepos.slice(0, 20))
          setState("ready")
        }
      } catch (error) {
        if (!cancelled) {
          setState("error")
        }
      }
    }

    loadRepos()

    return () => {
      cancelled = true
    }
  }, [])

  const marqueeItems = useMemo(() => {
    if (!repos.length) {
      return []
    }

    return [...repos, ...repos]
  }, [repos])

  return (
    <section className="w-full space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-primary">Latest GitHub Repositories</h3>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          View GitHub Profile
        </a>
      </div>

      {state === "loading" && <p className="text-sm text-muted-foreground">Loading repositories...</p>}
      {state === "empty" && <p className="text-sm text-muted-foreground">No repositories to display right now.</p>}
      {state === "error" && (
        <p className="text-sm text-destructive">Unable to load GitHub repositories. Please check again later.</p>
      )}

      {state === "ready" && marqueeItems.length > 0 && (
        <div className="marquee rounded-xl border border-primary/20 bg-card/60">
          <div className="marquee-track gap-4 px-6 py-4">
            {marqueeItems.map((repo, index) => (
              <a
                key={`${repo.id}-${index}`}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[220px] max-w-[260px] flex-1 flex-col gap-2 rounded-lg border border-primary/10 bg-card/80 p-4 text-sm transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="text-sm font-semibold text-primary">{repo.name}</span>
                <span className="line-clamp-2 text-xs text-muted-foreground">
                  {repo.description || "No description provided."}
                </span>
                {repo.language && (
                  <span className="mt-auto inline-flex w-fit items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-primary/80">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary/60" />
                    {repo.language}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
