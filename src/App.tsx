import { Github, Linkedin, Mail } from "lucide-react";

import Contact from "./components/Contact";
import { useTheme } from "./context/useTheme";
import AnimatedBackground from "./components/AnimatedBackgroud";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Skills from "./components/Skill";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen relative transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-sky-50 via-white to-sky-50"
      }`}
    >
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer
        className={`transition-colors duration-300 ${
          theme === "dark"
            ? "bg-slate-900 border-t border-slate-700/50"
            : "bg-sky-50 border-t border-sky-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`text-sm mb-4 md:mb-0 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              © 2025 Your Name. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-sky-400"
                    : "text-slate-600 hover:text-sky-600"
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-sky-400"
                    : "text-slate-600 hover:text-sky-600"
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-sky-400"
                    : "text-slate-600 hover:text-sky-600"
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
