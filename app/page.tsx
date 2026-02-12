"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import PageLoader from "@/components/page-loader"
import HomePage from "@/components/pages/home-page"
import AboutPage from "@/components/pages/about-page"
import SkillsPage from "@/components/pages/skills-page"
import ProjectsPage from "@/components/pages/projects-page"
import ContactPage from "@/components/pages/contact-page"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("darkMode")
    if (saved !== null) setIsDarkMode(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const handleNavigate = (section: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setActiveSection(section)
      setIsLoading(false)
    }, 300)
  }

  const renderPage = () => {
    switch (activeSection) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "skills":
        return <SkillsPage />
      case "projects":
        return <ProjectsPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
      <main className="flex-1 pt-20 md:pt-24 px-4 md:px-8">{renderPage()}</main>
      <PageLoader isLoading={isLoading} />
    </div>
  )
}
