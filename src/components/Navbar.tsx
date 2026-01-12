import { Rocket, Sun, Moon, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/useTheme";


const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? theme === "dark"
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-slate-900/20"
            : "bg-white/95 backdrop-blur-md border-b border-sky-200/50 shadow-lg shadow-sky-200/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div
              className={`relative p-2 rounded-xl transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-sky-500/20 to-emerald-500/20 group-hover:from-sky-500/30 group-hover:to-emerald-500/30"
                  : "bg-gradient-to-br from-sky-100 to-emerald-100 group-hover:from-sky-200 group-hover:to-emerald-200"
              }`}
            >
              <Rocket
                className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                  theme === "dark" ? "text-sky-400" : "text-sky-600"
                }`}
              />
              <div
                className={`absolute inset-0 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-sky-500 to-emerald-500"
                    : "bg-gradient-to-br from-sky-400 to-emerald-400"
                }`}
              ></div>
            </div>
            <span
              className={`text-xl font-bold transition-all duration-300 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Bai Kimhouy
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? theme === "dark"
                      ? "text-sky-400"
                      : "text-sky-600"
                    : theme === "dark"
                    ? "text-slate-300 hover:text-sky-400"
                    : "text-slate-600 hover:text-sky-600"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                      theme === "dark" ? "bg-sky-400" : "bg-sky-600"
                    }`}
                  ></span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`relative p-3 rounded-xl transition-all duration-300 overflow-hidden group ${
                theme === "dark"
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-sky-100 hover:bg-sky-200"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity ${
                  theme === "dark" ? "block" : "hidden"
                }`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 group-hover:opacity-20 transition-opacity ${
                  theme === "light" ? "block" : "hidden"
                }`}
              ></div>
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 group-hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800 text-slate-300 hover:text-sky-400 hover:bg-slate-700"
                  : "bg-sky-100 text-slate-600 hover:text-sky-600 hover:bg-sky-200"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-lg border-t transition-all duration-300 ${
            theme === "dark"
              ? "bg-slate-800/98 border-slate-700/50"
              : "bg-white/98 border-sky-200/50"
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? theme === "dark"
                      ? "bg-sky-400/10 text-sky-400 border-l-4 border-sky-400"
                      : "bg-sky-100 text-sky-600 border-l-4 border-sky-600"
                    : theme === "dark"
                    ? "text-slate-300 hover:bg-slate-700/50 hover:text-sky-400"
                    : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
