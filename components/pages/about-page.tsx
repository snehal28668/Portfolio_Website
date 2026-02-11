"use client"
import { Code2, Briefcase, BookOpen, Smile } from "lucide-react"

export default function AboutPage() {
  const timelineEvents = [
    { year: "2022", title: "My Journey Started", description: "Began journey with learning and web development" },
    { year: "2023", title: "First Project", description: "Built first project and gained practical experience" },
    { year: "2024", title: "AI Interest", description: "Became interested in Machine Learning and AI" },
    { year: "2025", title: "Growth", description: "Expanding skills in AI/ML and full-stack development" },
  ]

  return (
    <div className="space-y-16 py-12">
      {/* About Section */}
      <section className="animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glassmorphic p-8 rounded-xl border border-primary/20">
            <Code2 className="text-primary mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Developer</h3>
            <p className="text-muted-foreground">
              Full-stack developer with expertise in modern web technologies. I build fast, scalable, and user-centric
              applications using React, Next.js, and Node.js.
            </p>
          </div>
          <div className="glassmorphic p-8 rounded-xl border border-primary/20">
            <Briefcase className="text-accent mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Learner</h3>
            <p className="text-muted-foreground">
              Passionate about continuous learning. I stay updated with latest technologies and best practices in
              software development and AI/ML.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
        <div className="space-y-4">
          <div className="glassmorphic p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg">Bachelor's in Information Technology</h4>
              <span className="text-sm text-muted-foreground">2022 - 2027</span>
            </div>
            <p className="text-muted-foreground">Priyardarshani College of Engineering, India</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <h3 className="text-2xl font-bold mb-8 text-primary">My Journey</h3>
        <div className="relative space-y-6">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="flex gap-6 animate-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-sm font-bold">
                  {event.year}
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="w-1 h-16 bg-linear-to-b from-primary to-transparent"></div>
                )}
              </div>
              <div className="pt-2">
                <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <h3 className="text-2xl font-bold mb-6 text-primary">When I'm Not Coding</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glassmorphic p-6 rounded-lg border border-primary/20 text-center">
            <BookOpen className="mx-auto mb-3 text-accent" size={28} />
            <p className="font-semibold">Reading</p>
            <p className="text-sm text-muted-foreground">Tech blogs & sci-fi</p>
          </div>
          <div className="glassmorphic p-6 rounded-lg border border-primary/20 text-center">
            <Code2 className="mx-auto mb-3 text-primary" size={28} />
            <p className="font-semibold">Open Source</p>
            <p className="text-sm text-muted-foreground">Contributing to projects</p>
          </div>
          <div className="glassmorphic p-6 rounded-lg border border-primary/20 text-center">
            <Smile className="mx-auto mb-3 text-accent" size={28} />
            <p className="font-semibold">Gaming</p>
            <p className="text-sm text-muted-foreground">Casual gaming & speedruns</p>
          </div>
        </div>
      </section>
    </div>
  )
}
