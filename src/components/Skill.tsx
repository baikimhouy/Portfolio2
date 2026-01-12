import { Code2, Palette, Database, Cloud, Cpu, Boxes } from "lucide-react";
import { useTheme } from "../context/useTheme";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Animation", level: 78 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 92 },
    ],
  },
  {
    title: "AI/ML",
    icon: Cpu,
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "OpenAI API", level: 85 },
      { name: "Data Analysis", level: 75 },
      { name: "Python ML", level: 72 },
    ],
  },
  {
    title: "Tools",
    icon: Boxes,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Jira", level: 80 },
      { name: "Webpack / Vite", level: 85 },
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-900/50" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-emerald-500 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`border rounded-xl p-6 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-sky-400/50"
                    : "bg-sky-50 border-sky-200 hover:border-sky-400"
                }`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      theme === "dark" ? "bg-sky-400/10" : "bg-sky-100"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        theme === "dark" ? "text-sky-400" : "text-sky-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`font-medium transition-colors duration-300 ${
                            theme === "dark"
                              ? "text-slate-300"
                              : "text-slate-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            theme === "dark" ? "text-sky-400" : "text-sky-600"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full rounded-full h-2 overflow-hidden transition-colors duration-300 ${
                          theme === "dark" ? "bg-slate-700" : "bg-sky-200"
                        }`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div
              className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              5+
            </div>
            <div
              className={`transition-colors duration-300 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              50+
            </div>
            <div
              className={`transition-colors duration-300 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              30+
            </div>
            <div
              className={`transition-colors duration-300 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
