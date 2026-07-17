const skills = [
  "React",
  "Redux",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Git",
  "GitHub",
  "Postman",
  "JWT",
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 p-6 rounded-2xl text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;