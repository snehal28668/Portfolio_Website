"use client"

import { useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
  isDarkMode: boolean
  onThemeToggle: () => void
}

export default function Navbar({ activeSection, onNavigate, isDarkMode, onThemeToggle }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <nav className="fixed top-0 right-0 lg:left-80 z-50 glassmorphic border-b border-primary/20 w-full lg:w-auto backdrop-blur-md bg-background/80">
      <div className="px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`text-xs lg:text-sm font-medium transition-colors pb-1 border-b-2 ${
                activeSection === item.toLowerCase()
                  ? "text-primary border-primary"
                  : "text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={onThemeToggle}
          className="p-2 rounded-lg bg-card hover:bg-primary/20 transition-colors neon-glow-hover ml-auto md:ml-0"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 space-y-2 border-t border-primary/20">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavigate(item.toLowerCase())
                setMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                activeSection === item.toLowerCase()
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
