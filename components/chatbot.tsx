"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
}

interface ChatbotProps {
  isOpen: boolean
  onToggle: () => void
}

export default function ChatBot({ isOpen, onToggle }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm an AI assistant. Ask me about Snehal's projects, skills, or experience!",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Great question! Snehal has extensive experience with React, Next.js, and AI/ML. Would you like to know more about a specific project?",
        sender: "bot",
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={onToggle}
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground z-30 neon-glow-hover transition-all hover:shadow-lg ${
          isOpen ? "hidden" : "flex items-center justify-center"
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 h-96 glassmorphic rounded-xl border border-primary/20 shadow-2xl z-30 flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary/20">
            <div>
              <h3 className="font-bold">Ask Me Anything</h3>
              <p className="text-xs text-muted-foreground">Powered by AI Assistant</p>
            </div>
            <button onClick={onToggle} className="p-1 hover:bg-primary/20 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-primary/20 text-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 bg-card border border-primary/20 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all neon-glow-hover"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
