"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  image?: string
  github: string
  live: string
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    const load = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/github-repos")

        if (!response.ok) {
          throw new Error("Unable to load projects right now.")
        }

        const data: Project[] = await response.json()

        if (active) {
          setProjects(data)
          setError(null)
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Something went wrong.")
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  const categories = useMemo(() => {
    const unique = new Set(projects.map((project) => project.category || "Other"))
    return ["All", ...Array.from(unique)]
  }, [projects])

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="space-y-12 py-12">
      <div className="animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-8 text-primary">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "bg-card text-muted-foreground hover:bg-card border border-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {loading && projects.length === 0 && !error && (
            <p className="text-muted-foreground">Loading your GitHub projects...</p>
          )}

          {!loading && filtered.length === 0 && !error && (
            <p className="text-muted-foreground">No projects found.</p>
          )}

          {error && <p className="text-destructive">{error}</p>}

          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="glassmorphic rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg neon-glow-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-40 bg-card overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  priority={index < 2}
                />
              </div>

              {/* Project Details */}
              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-primary line-clamp-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-card hover:bg-primary/20 border border-primary/20 rounded-lg transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
