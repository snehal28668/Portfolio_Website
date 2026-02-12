"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles, Github, Linkedin, Mail } from "lucide-react"
import GitHubMarquee from "@/components/github-marquee"

export default function HomePage() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Developer | AI Enthusiast | Problem Solver"

  const socialLinks = [
    { href: "https://github.com/snehal28668", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/snehal-selukar", label: "LinkedIn", icon: Linkedin },
    { href: "mailto:snehalganpatiselukar@gmail.com", label: "Email", icon: Mail },
  ]

  const highlightCards = [
    { title: "Completed", subtitle: "5+ Projects", accent: "text-primary" },
    { title: "Experience", subtitle: "3+ Years", accent: "text-accent" },
    { title: "Skills", subtitle: "10+ Core Skills", accent: "text-primary" },
    { title: "Achievements", subtitle: "Hackathon Learner", accent: "text-accent" },
    { title: "Location", subtitle: "Based in India", accent: "text-primary" },
  ]

  const primaryHighlights = highlightCards.slice(0, 3)
  const secondaryHighlights = highlightCards.slice(3)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-14 py-24">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center space-y-8">
        <div className="flex flex-col items-center gap-6 animate-fade-in-up">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-primary/40 bg-card shadow-lg shadow-primary/20 sm:h-48 sm:w-48">
            <Image src="/profile-photo.jpg" alt="Snehal Selukar" fill sizes="192px" className="object-cover" priority />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Hi, I'm Snehal
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-primary/20 bg-card px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} />
                  <span>{label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Typing Animation */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative inline-flex max-w-full flex-wrap items-center justify-center text-lg sm:text-2xl md:text-3xl text-muted-foreground text-center break-words">
            <Sparkles
              className="mr-2 text-primary animate-pulse sm:mr-0 sm:absolute sm:-left-8 md:-left-10 sm:-translate-y-1/2"
              size={24}
              style={{ top: "50%" }}
            />
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Description */}
        <p
          className="mx-auto w-full max-w-full text-base sm:text-lg text-muted-foreground text-center break-words animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Building innovative solutions at the intersection of web development and artificial intelligence. Passionate
          about creating experiences that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg neon-glow-hover transition-all flex items-center gap-2">
            Hire Me
            <ArrowRight size={20} />
          </button>
          <a
            href="mailto:snehalganpatiselukar@gmail.com"
            className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Highlights */}
        <div
          className="-mx-4 grid w-full max-w-full grid-cols-1 gap-4 px-4 pt-4 animate-fade-in-up sm:mx-0 sm:px-0 md:grid-cols-3"
          style={{ animationDelay: "0.8s" }}
        >
          {primaryHighlights.map((card, index) => (
            <div
              key={card.title}
              className="w-full min-w-0 rounded-lg border border-primary/20 bg-card/80 p-4 text-center transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40 md:h-full md:text-left"
              style={{ animationDelay: `${0.8 + index * 0.05}s` }}
            >
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{card.title}</p>
              <p className={`mt-2 break-words text-xl font-semibold ${card.accent}`}>{card.subtitle}</p>
            </div>
          ))}
        </div>

        {secondaryHighlights.length > 0 && (
          <div
            className="-mx-4 flex w-full max-w-full flex-col items-stretch gap-4 px-4 animate-fade-in-up sm:mx-0 sm:px-0 md:flex-row md:justify-center md:gap-6"
            style={{ animationDelay: "0.9s" }}
          >
            {secondaryHighlights.map((card, index) => (
              <div
                key={card.title}
                className="w-full min-w-0 rounded-lg border border-primary/20 bg-card/80 p-4 text-center transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40 md:w-auto md:min-w-[240px] md:text-left"
                style={{ animationDelay: `${0.9 + index * 0.05}s` }}
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{card.title}</p>
                <p className={`mt-2 break-words text-xl font-semibold ${card.accent}`}>{card.subtitle}</p>
              </div>
            ))}
          </div>
        )}

        <div className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <GitHubMarquee />
        </div>
      </div>

      {/* Scroll Indicator removed per request */}
    </div>
  )
}
