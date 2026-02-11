"use client"

import { useState } from "react"
import { Award } from "lucide-react"

export default function CertificatesPage() {
  const [filter, setFilter] = useState("All")

  const certificates = [
    {
      id: 1,
      title: "Advanced React Patterns",
      issuer: "Udemy",
      category: "Web Dev",
      date: "2024",
      image: "/react-certificate.jpg",
    },
    {
      id: 2,
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      category: "AI/ML",
      date: "2023",
      image: "/ml-certificate.jpg",
    },
    {
      id: 3,
      title: "Full-Stack Web Development",
      issuer: "Complete Web Dev Bootcamp",
      category: "Web Dev",
      date: "2023",
      image: "/fullstack-certificate.jpg",
    },
    {
      id: 4,
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      category: "Cloud",
      date: "2024",
      image: "/aws-certificate.jpg",
    },
    {
      id: 5,
      title: "Hackathon Winner",
      issuer: "Tech Innovation Summit",
      category: "Hackathons",
      date: "2023",
      image: "/hackathon-winner.jpg",
    },
    {
      id: 6,
      title: "TypeScript Advanced",
      issuer: "Frontend Masters",
      category: "Web Dev",
      date: "2024",
      image: "/typescript-certificate.jpg",
    },
  ]

  const categories = ["All", "Web Dev", "AI/ML", "Cloud", "Hackathons"]
  const filtered = filter === "All" ? certificates : certificates.filter((c) => c.category === filter)

  return (
    <div className="space-y-12 py-12">
      <div className="animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-8 text-primary">Certificates & Achievements</h2>

        {/* Filter */}
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, index) => (
            <div
              key={cert.id}
              className="group glassmorphic rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg neon-glow-hover animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="h-40 bg-card relative overflow-hidden">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-sm leading-tight pr-2">{cert.title}</h3>
                  <Award size={18} className="text-primary flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">{cert.category}</span>
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
