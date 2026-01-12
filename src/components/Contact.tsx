import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTheme } from "../context/useTheme";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-emerald-500 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                Let's Work Together
              </h3>
              <p
                className={`leading-relaxed mb-8 transition-colors duration-300 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    theme === "dark" ? "bg-sky-400/10" : "bg-sky-100"
                  }`}
                >
                  <Mail
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:your.email@example.com"
                    className={`transition-colors ${
                      theme === "dark"
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-slate-600 hover:text-sky-600"
                    }`}
                  >
                    baikimhoui@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    theme === "dark" ? "bg-sky-400/10" : "bg-sky-100"
                  }`}
                >
                  <Phone
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Phone
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className={`transition-colors ${
                      theme === "dark"
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-slate-600 hover:text-sky-600"
                    }`}
                  >
                    069 470 468
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    theme === "dark" ? "bg-sky-400/10" : "bg-sky-100"
                  }`}
                >
                  <MapPin
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Location
                  </h4>
                  <p
                    className={`transition-colors duration-300 ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Sensok, Phnom Penh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border rounded-xl p-8 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-slate-800/50 border-slate-700/50"
                : "bg-sky-50 border-sky-200"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block font-medium mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                    theme === "dark"
                      ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:ring-sky-400"
                      : "bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:ring-sky-500"
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block font-medium mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                    theme === "dark"
                      ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:ring-sky-400"
                      : "bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:ring-sky-500"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block font-medium mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                    theme === "dark"
                      ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:ring-sky-400"
                      : "bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:ring-sky-500"
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-sky-500/50 hover:shadow-sky-500/70"
                    : "bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-sky-400/50 hover:shadow-sky-400/70"
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="text-center font-medium text-green-500">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
