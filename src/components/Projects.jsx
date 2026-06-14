const projects = [
  {
    title: "Elixir Aura",
    description:
      "Full-stack e-commerce platform with user authentication, Razorpay payment integration, admin dashboard, inventory management, and sales analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    github: "https://github.com/chandana9633/Elixir-Aura",
  },
  {
    title: "TaskFlow",
    description:
      "Task management application with JWT authentication, protected routes, CRUD operations, and responsive user interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/chandana9633/taskflow-app",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with city search, weather forecasting, temperature, humidity, and wind-speed tracking using external APIs.",
    tech: ["React", "Weather API", "JavaScript", "CSS"],
    github: "https://github.com/chandana9633/weather-app",
  },
  {
    title: "OLX Clone",
    description:
      "Marketplace platform allowing users to browse, post, and manage product listings with Firebase integration.",
    tech: ["React", "Firebase", "JavaScript"],
    github: "https://github.com/chandana9633/olx-clone",
  },
  {
    title: "Netflix Clone",
    description:
      "Netflix-inspired streaming platform UI featuring movie browsing, responsive design, and API integration.",
    tech: ["React", "TMDB API", "CSS"],
    github: "https://github.com/chandana9633/netflix-clone",
  },
  {
    title: "Todo App",
    description:
      "Task tracking application with create, update, delete, and status management functionality.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/chandana9633/todo-app",
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-600 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;