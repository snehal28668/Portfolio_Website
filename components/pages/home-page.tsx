"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Developer | AI Enthusiast | Problem Solver"

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
    <div className="min-h-screen flex flex-col justify-center items-center space-y-12 py-20">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center space-y-8 max-w-3xl">
        {/* Main Heading */}
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Hi, I'm Snehal
            </span>
          </h1>
        </div>

        {/* Typing Animation */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-2xl md:text-3xl text-muted-foreground">
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Building innovative solutions at the intersection of web development and artificial intelligence. Passionate
          about creating experiences that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg neon-glow-hover transition-all flex items-center gap-2">
            Hire Me
            <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
            Let's Talk
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="p-4 glassmorphic rounded-lg border border-primary/20">
            <p className="text-2xl font-bold text-primary">5+</p>
            <p className="text-sm text-muted-foreground">Projects</p>
          </div>
          <div className="p-4 glassmorphic rounded-lg border border-primary/20">
            <p className="text-2xl font-bold text-accent">3+</p>
            <p className="text-sm text-muted-foreground">Years</p>
          </div>
          <div className="p-4 glassmorphic rounded-lg border border-primary/20">
            <p className="text-2xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Skills</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Sparkles className="text-primary" size={24} />
        
      </div>
    </div>
  )
}
