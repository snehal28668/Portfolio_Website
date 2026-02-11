"use client"

export default function SkillsPage() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    Backend: ["Node.js", "Express", "Python", "SQL", "REST APIs"],
    Databases: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "GitHub"],
  }

  const proficiencySkills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 85 },
  ]

  return (
    <div className="space-y-16 py-12">
      {/* Skill Categories */}
      <section className="animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-12 text-primary">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glassmorphic p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg neon-glow-hover animate-fade-in-up"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proficiency Bars */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h3 className="text-2xl font-bold mb-8 text-primary">Proficiency Levels</h3>
        <div className="space-y-6">
          {proficiencySkills.map((skill) => (
            <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${0.3}s` }}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-card rounded-full overflow-hidden border border-primary/20">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

</div>
  )
}
