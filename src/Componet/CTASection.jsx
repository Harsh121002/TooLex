import { useTheme } from "../context/ThemeContext";

export default function CTASection() {
  const { darkMode, primaryColor, themeColors, bgClasses } = useTheme();

  return (
    <div className={`${darkMode ? bgClasses.dark.black : bgClasses.light.slate}`}>
      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <div
          className={`relative ${
            darkMode ? "bg-[#111]" : "bg-white"
          } rounded-2xl p-20 w-full shadow-xl overflow-hidden`}
        >
          {/* Gradient Blur Background */}
          <div className="absolute inset-0">
            <div
              className={`absolute w-72 h-72 bg-gradient-to-r ${
                themeColors[primaryColor]
              } rounded-full blur-3xl top-[-20%] left-[-10%] opacity-40`}
            />
            <div
              className={`absolute w-72 h-72 bg-gradient-to-r ${
                themeColors[primaryColor]
              } rounded-full blur-3xl bottom-[-20%] right-[-10%] opacity-40`}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
              With Tailux, building modern, scalable applications is a breeze.
              Enjoy lightning-fast performance and smooth efficiency to bring
              your project!
            </p>
            <button
              className={`px-6 py-3 bg-gradient-to-r ${
                themeColors[primaryColor]
              } hover:opacity-90 transition rounded-lg text-white font-medium shadow-lg`}
              onClick={() => window.open("https://yourproduct.com", "_blank")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`max-w-7xl mx-auto px-6 py-6 border-t ${
          darkMode ? "border-gray-800" : "border-gray-300"
        } flex flex-col sm:flex-row items-center justify-between gap-4 text-sm ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l9-9 9 9-9 9-9-9z"
            />
          </svg>
          <span className="text-3xl font-semibold">TooLex</span>
        </div>

        {/* CopyRight */}
        <p className="text-center sm:text-right">
          © 2025 Tailux Theme. All rights reserved by Piniastudio.
        </p>
      </footer>
    </div>
  );
}
