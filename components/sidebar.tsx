"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Instagram, X, Menu } from "lucide-react"

interface SidebarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 border-r bg-card p-8 flex-col justify-between overflow-y-auto z-40">
        {/* Profile Section */}
        <div className="space-y-6">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-[200px] h-[200px] rounded-full bg-primary p-1">
              <img 
                src="/profile photo.jpg" 
                alt="Snehal Selukar" 
                className="w-full h-full rounded-full object-cover border border-border"
              />
            </div>
          </div>

          {/* Name and Tagline */}
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-1 name-text">Snehal Selukar</h1>
            <p className="text-sm text-muted-foreground">Full-Stack Developer | AI/ML Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/snehal28668"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <Github size={20} className="text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/snehal-selukar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={20} className="text-primary" />
            </a>
            <a
              href="mailto:snehalganpatiselukar@gmail.com"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
            >
              <Mail size={20} className="text-primary" />
            </a>
          </div>

          {/* Stats Badges */}
          <div className="space-y-2 pt-4">
            <div className="p-3 rounded-lg bg-secondary border border-border text-center">
              <p className="text-xs text-muted-foreground">Completed</p>
              <p className="text-lg font-semibold text-primary">5+ Projects</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary border border-border text-center">
              <p className="text-xs text-muted-foreground">Achievements</p>
              <p className="text-lg font-semibold text-accent">Hackathon Learner</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary border border-border text-center">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-lg font-semibold">Based in India</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3 font-semibold">NAVIGATION</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span className="text-sm">{item}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg hover:bg-secondary transition-colors"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <aside className="absolute left-0 top-0 h-screen w-64 bg-card border-r border-border p-6 flex flex-col justify-between overflow-y-auto">
            {/* Profile Section */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center border border-border">
                    <span className="text-2xl font-bold text-primary">SS</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold mb-1">Snehal Selukar</h1>
                <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
              </div>

              <nav className="space-y-1 pt-2">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      onNavigate(item.toLowerCase())
                      setMobileOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                      activeSection === item.toLowerCase()
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </aside>
        </div>
      )}
    </>
  )
}
