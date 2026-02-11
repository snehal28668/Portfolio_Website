"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5daba877-4da0-4f98-9bb9-eb38289abda3", // 🔴 later env me daalna
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error("Form submission failed")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-12 py-12">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-primary">Let's Connect</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          I'm always interested in hearing about internships, jobs, hackathons,
          and new projects.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg border text-center">
            <Mail className="mx-auto mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <a href="mailto:snehalganpatiselukar@gmail.com">snehalganpatiselukar@gmail.com</a>
          </div>

          <div className="p-6 rounded-lg border text-center">
            <MapPin className="mx-auto mb-4" />
            <h3 className="font-bold mb-2">Location</h3>
            <p>India</p>
          </div>

          <div className="p-6 rounded-lg border text-center">
            <Linkedin className="mx-auto mb-4" />
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/snehal-selukar" target="_blank">
              View Profile
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl p-8 rounded-xl border">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          {submitted ? (
            <div className="p-6 border rounded-lg text-center">
              <p className="font-semibold">
                ✅ Thanks! Your message has been sent.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-4 border text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 border rounded font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">Follow Me</h3>
          <div className="flex gap-4">
             <a
    href="https://github.com/snehal28668"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 glassmorphic rounded-lg border hover:bg-primary/10"
  >
    <Github size={24} />
  </a>
          <a
    href="mailto:snehalganpatiselukar@gmail.com"
    className="p-3 glassmorphic rounded-lg border hover:bg-primary/10"
  >
    <Mail size={24} />
  </a>

   <a
    href="https://www.linkedin.com/in/snehal-selukar"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 glassmorphic rounded-lg border hover:bg-primary/10"
  >
    <Linkedin size={24} />
  </a>
  
          </div>
        </div>
      </div>
    </div>
  )
}
