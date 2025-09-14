import { useTheme } from "../context/ThemeContext";

export default function FeatureGrid() {
  const { darkMode, bgClasses } = useTheme();

  const features = [
    { 
      img: "/images/box1.webp", 
      title: "Over 1000 Components", 
      desc: "A vast library of reusable, modern, and beautifully designed components to accelerate your development process." 
    },
    { 
      img: "/images/box2.webp", 
      title: "Rich Layouts and Colors", 
      desc: "Offers vibrant colors and flexible layouts for crafting visually stunning user interfaces." 
    },
    { 
      img: "/images/box3.webp", 
      title: "Ultra-Responsive Layouts", 
      desc: "Ensures seamless performance and a flawless look across mobile, tablet, and desktop devices." 
    },
    { 
      img: "", 
      title: "10 Ready-to-Use Prebuilt Apps", 
      desc: "Includes apps like Kanban, To-Do, Chat, AI Chat, and more for quick integration into projects." 
    },
    { 
      img: "", 
      title: "20+ Stunning Dashboards", 
      desc: "Dashboards for analytics, sales, crypto, education, healthcare, and more to track and visualize data effectively." 
    },
    { 
      img: "", 
      title: "Extensive Pages & Prototypes", 
      desc: "Over 40 pages, including blog, user profiles, FAQ, pricing, sign-in, and prototypes, for rapid development." 
    },
    { 
      img: "", 
      title: "Advanced Data Tables", 
      desc: "20+ tables for managing orders, projects, subscriptions, and more with powerful filtering and customization options." 
    },
    { 
      img: "", 
      title: "Interactive Forms", 
      desc: "10+ forms, including wizards like eKYC, Add Product, and New Post, to streamline user input processes." 
    },
    { 
      img: "", 
      title: "Extensive React Utilities", 
      desc: "Over 100 React hooks and utilities to simplify workflows and speed up application development." 
    },
    { 
      img: "", 
      title: "Comprehensive Documentation", 
      desc: "Well-documented components with a starter kit and integration guides for efficient setup." 
    },
    { 
      img: "", 
      title: "Versatile Layout Options", 
      desc: "Rich layouts with bordered or shadowed cards, making your UIs flexible and visually appealing." 
    },
    { 
      img: "", 
      title: "Multi-Language Support", 
      desc: "Supports both LTR and RTL languages using modern best practices." 
    }
  ];

  return (
    <section
      className={`${
        darkMode ? bgClasses.dark.black : bgClasses.light.slate
      } px-4 py-12`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">TooLex?</h2>
          <p className="font-semibold text-lg text-gray-400">
            All you need to build amazing web apps effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-5 shadow-md border transition duration-300 hover:shadow-lg flex flex-col items-start max-w-sm w-full
                ${darkMode ? "bg-black border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-900"}
              `}
            >
              {f.img && (
                <img
                  src={f.img}
                  alt={f.title}
                  className="mb-4 w-full h-32 object-contain rounded-lg bg-gray-100"
                />
              )}
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
