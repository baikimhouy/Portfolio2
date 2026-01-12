import { ArrowDown, Sparkles, Code2, Zap, Star } from "lucide-react";
import { useTheme } from "../context/useTheme";


export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            theme === "dark" ? "bg-sky-500" : "bg-sky-300"
          }`}
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            theme === "dark" ? "bg-emerald-500" : "bg-emerald-300"
          }`}
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        <div
          className="inline-flex items-center space-x-2 mb-8 animate-fade-in-down"
          style={{ animationDelay: "0.1s" }}
        >
          <div
            className={`relative inline-flex items-center space-x-2 border rounded-full px-5 py-2.5 transition-all duration-300 group hover:scale-105 ${
              theme === "dark"
                ? "bg-gradient-to-r from-sky-500/10 to-emerald-500/10 border-sky-400/30 hover:border-sky-400/50"
                : "bg-gradient-to-r from-sky-100 to-emerald-100 border-sky-300 hover:border-sky-400"
            }`}
          >
            <Sparkles
              className={`w-4 h-4 animate-spin-slow ${
                theme === "dark" ? "text-sky-400" : "text-sky-600"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-sky-400" : "text-sky-600"
              }`}
            >
              Available for work
            </span>
            <div
              className={`absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity ${
                theme === "dark"
                  ? "bg-gradient-to-r from-sky-500 to-emerald-500"
                  : "bg-gradient-to-r from-sky-400 to-emerald-400"
              }`}
            ></div>
          </div>
        </div>

        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-colors duration-300 animate-fade-in ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-500 text-transparent bg-clip-text animate-gradient">
              Bai Kimhouy
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-emerald-500 rounded-full"></span>
          </span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              theme === "dark" ? "bg-slate-800/50" : "bg-white/50"
            }`}
          >
            <Code2
              className={`w-5 h-5 ${
                theme === "dark" ? "text-sky-400" : "text-sky-600"
              }`}
            />
            <span
              className={`text-lg font-medium ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Full Stack Developer
            </span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              theme === "dark" ? "bg-slate-800/50" : "bg-white/50"
            }`}
          >
            <Star
              className={`w-5 h-5 ${
                theme === "dark" ? "text-emerald-400" : "text-emerald-600"
              }`}
            />
            <span
              className={`text-lg font-medium ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              UI/UX 
            </span>
          </div>
        </div>

        <p
          className={`text-lg max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-300 animate-fade-in-up ${
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Crafting exceptional digital experiences with modern technologies.
          Passionate about building scalable applications and beautiful
          interfaces.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`group relative px-8 py-4 font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-sky-500/50 hover:shadow-sky-500/70"
                : "bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-sky-400/50 hover:shadow-sky-400/70"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`relative px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105 group overflow-hidden ${
              theme === "dark"
                ? "bg-slate-800/50 text-white border-slate-700 hover:border-sky-400"
                : "bg-white/50 text-slate-900 border-sky-200 hover:border-sky-400"
            }`}
          >
            <span className="relative z-10">Get In Touch</span>
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-sky-500 to-emerald-500"
                  : "bg-gradient-to-r from-sky-400 to-emerald-400"
              }`}
            ></div>
          </button>
        </div>

        <div
          className={`mt-20 animate-bounce cursor-pointer transition-colors duration-300 hover:scale-110 ${
            theme === "dark"
              ? "text-slate-400 hover:text-sky-400"
              : "text-slate-500 hover:text-sky-600"
          }`}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </div>
      </div>
    </section>
  );
}
