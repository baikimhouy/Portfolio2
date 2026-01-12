import React from "react";
import { useTheme } from "../context/useTheme";
import { User, Target, Lightbulb } from "lucide-react";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              I'm a passionate full-stack developer with a keen eye for design
              and a love for creating seamless user experiences. With several
              years of experience in web development, I've worked on diverse
              projects ranging from e-commerce platforms to complex SaaS
              applications.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project not only functions
              flawlessly but also delights users with intuitive interfaces and
              smooth interactions.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          <div className="space-y-6">
            <div
              className={`border rounded-xl p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700/50 hover:border-sky-400/50"
                  : "bg-sky-50 border-sky-200 hover:border-sky-400"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    theme === "dark" ? "bg-sky-400/10" : "bg-sky-100"
                  }`}
                >
                  <User
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Who I Am
                  </h3>
                  <p
                    className={`transition-colors duration-300 ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    A dedicated developer focused on writing clean, efficient
                    code and building applications that make a difference.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border rounded-xl p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700/50 hover:border-sky-400/50"
                  : "bg-sky-50 border-sky-200 hover:border-sky-400"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    theme === "dark" ? "bg-sky-400/10" : "bg-sky-100"
                  }`}
                >
                  <Target
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    My Goal
                  </h3>
                  <p
                    className={`transition-colors duration-300 ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    To create innovative solutions that solve real-world
                    problems while continuously learning and growing as a
                    developer.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border rounded-xl p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700/50 hover:border-sky-400/50"
                  : "bg-sky-50 border-sky-200 hover:border-sky-400"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    theme === "dark" ? "bg-sky-400/10" : "bg-sky-100"
                  }`}
                >
                  <Lightbulb
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    What Drives Me
                  </h3>
                  <p
                    className={`transition-colors duration-300 ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    The endless possibilities of technology and the joy of
                    turning complex challenges into elegant, user-friendly
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}