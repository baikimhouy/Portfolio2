import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../context/useTheme";


const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and productivity analytics.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with forecasts, interactive maps, and personalized weather alerts.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "API Integration", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Social Media Platform",
    description:
      "Modern social networking application with posts, stories, messaging, and advanced privacy controls.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive fitness application with workout plans, progress tracking, and nutrition guidance.",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React Native", "Redux", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "SaaS platform for creating professional portfolios with customizable templates and analytics.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Vue.js", "Django", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-900/50" : "bg-sky-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-emerald-500 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A selection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group border rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700/50 hover:border-sky-400/50"
                  : "bg-white border-sky-200 hover:border-sky-400"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t opacity-60 ${
                    theme === "dark"
                      ? "from-slate-900 to-transparent"
                      : "from-slate-900/30 to-transparent"
                  }`}
                ></div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm rounded-full border transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-sky-400/10 text-sky-400 border-sky-400/20"
                          : "bg-sky-100 text-sky-700 border-sky-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors ${
                      theme === "dark"
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-slate-600 hover:text-sky-600"
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors ${
                      theme === "dark"
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-slate-600 hover:text-sky-600"
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
