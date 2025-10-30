import { useTheme } from "../context/ThemeContext";

export default function CoreTechnologies() {
  const { darkMode, primaryColor, themeColors, bgClasses } = useTheme();

  const techs = [
    {
      name: "React",
      desc: "A powerful library for building dynamic, interactive user interfaces with reusable components.",
      img: "/images/react.png"
    },
    {
      name: "Tailwind CSS",
      desc: "A utility-first CSS framework for creating responsive and customizable designs quickly.",
      img: "/images/tailwind.png"
    },
    {
      name: "Headless UI",
      desc: "Accessible, unstyled UI components built to work seamlessly with Tailwind CSS.",
      img: "/images/headless.png"
    },
    {
      name: "Vite",
      desc: "A fast build tool offering an optimized development and build experience for modern web projects.",
      img: "/images/vite.png"
    },
    {
      name: "React Router",
      desc: "A flexible solution for managing routing and navigation in React applications.",
      img: "/images/rr.png"
    },
    {
      name: "Tanstack Table",
      desc: "A feature-rich library for creating performant and customizable data tables in React.",
      img: "/images/stan.jfif"
    },
    {
      name: "React Hook Form",
      desc: "A lightweight library for building flexible and high-performance form handling in React.",
      img: "/images/reacthook.png"
    },
    {
      name: "Yup",
      desc: "A schema validation library for easily validating and transforming object shapes.",
      img: "/images/yup.jpg"
    },
  ];

  return (
    <section
      className={`${darkMode ? bgClasses.dark.black : bgClasses.light.slate
        } px-6 py-16 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold">Core Technologies</h2>
        <p className="mt-2 text-gray-400">
          Tailux is built with the following core technologies:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-5 shadow-md flex flex-col items-start hover:shadow-lg transition-shadow duration-300
              ${darkMode
                ? "bg-[#131314]  text-gray-200"
                : "bg-white  text-gray-900"
              } 
              
            `}
          >

            <img
              src={tech.img}
              alt={tech.name}
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
            <p className="text-sm">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
