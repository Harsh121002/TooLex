import { useState } from "react";
import {
  Home,
  AppWindow,
  Table,
  Layout,
  FileText,
  Component,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ExploreTemplate() {
  const { darkMode, primaryColor, themeColors, bgClasses } = useTheme();
  const [active, setActive] = useState("Dashboards");

  const sidebarItems = [
    { name: "Dashboards", icon: <Home size={20} /> },
    { name: "Applications", icon: <AppWindow size={20} /> },
    { name: "Table", icon: <Table size={20} /> },
    { name: "Prototypes", icon: <Layout size={20} /> },
    { name: "Forms", icon: <FileText size={20} /> },
    { name: "Components", icon: <Component size={20} /> },
  ];

  const templates = {
    Dashboards: [
      { title: "Sales", desc: "Analyze sales performance insights.", img: "/images/d1.webp", path: "https://google.com/" },
      { title: "CRM Analytics", desc: "View customer relationship metrics.", img: "/images/d2.jfif", path: "https://crm.example.com" },
      { title: "Orders", desc: "Track and manage order data.", img: "/images/d3.jfif", path: "https://orders.example.com" },
      { title: "Cryptocurrency V1", desc: "Monitor cryptocurrency trends.", img: "/images/d4.jpg", path: "https://crypto.example.com/v1" },
      { title: "Cryptocurrency V2", desc: "Enhanced crypto analytics.", img: "/images/d5.jpg", path: "https://crypto.example.com/v2" },
      { title: "Banking V1", desc: "Financial metrics dashboard.", img: "/images/d6.png", path: "https://banking.example.com" },
      { title: "Sales", desc: "Analyze sales performance insights.", img: "/images/d1.webp", path: "https://google.com/" },
      { title: "CRM Analytics", desc: "View customer relationship metrics.", img: "/images/d2.jfif", path: "https://crm.example.com" },
      { title: "Orders", desc: "Track and manage order data.", img: "/images/d3.jfif", path: "https://orders.example.com" },
      { title: "Cryptocurrency V1", desc: "Monitor cryptocurrency trends.", img: "/images/d4.jpg", path: "https://crypto.example.com/v1" },
      { title: "Cryptocurrency V2", desc: "Enhanced crypto analytics.", img: "/images/d5.jpg", path: "https://crypto.example.com/v2" },
      { title: "Banking V1", desc: "Financial metrics dashboard.", img: "/images/d6.png", path: "https://banking.example.com" },
    ],
    Applications: [
      { title: "CRM Analytics", desc: "View customer relationship metrics.", img: "/images/d2.jfif", path: "https://crm.example.com" },
      { title: "Orders", desc: "Track and manage order data.", img: "/images/d3.jfif", path: "https://orders.example.com" },
      { title: "Cryptocurrency V1", desc: "Monitor cryptocurrency trends.", img: "/images/d4.jpg", path: "https://crypto.example.com/v1" },
      { title: "Cryptocurrency V2", desc: "Enhanced crypto analytics.", img: "/images/d5.jpg", path: "https://crypto.example.com/v2" },
      { title: "Banking V1", desc: "Financial metrics dashboard.", img: "/images/d6.png", path: "https://banking.example.com" },
    ],
    Table: [
      { title: "User Table", desc: "Manage user records.", img: "/images/d2.jfif", path: "https://users.example.com" },
      { title: "Product Table", desc: "Track product details.", img: "/images/d2.jfif", path: "https://products.example.com" },
    ],
    Prototypes: [
      { title: "Wireframes", desc: "Low-fidelity prototypes.", img: "/images/d5.jpg", path: "https://proto.example.com/wireframes" },
      { title: "Mockups", desc: "High-fidelity UI designs.", img: "/images/d2.jfif", path: "https://proto.example.com/mockups" },
    ],
    Forms: [
      { title: "Login Form", desc: "Secure user authentication.", img: "/images/d5.jpg", path: "https://forms.example.com/login" },
      { title: "Signup Form", desc: "New user registration.", img: "/images/d6.png", path: "https://forms.example.com/signup" },
    ],
    Components: [
      { title: "Buttons", desc: "Pre-styled UI buttons.", img: "/images/d5.jpg", path: "https://ui.example.com/buttons" },
      { title: "Cards", desc: "Reusable card layouts.", img: "/images/d2.jfif", path: "https://ui.example.com/cards" },
    ],
  };

  return (
    <div
      className={`min-h-screen flex flex-col md:p-24 ${darkMode ? bgClasses.dark.black : bgClasses.light.slate
        }`}
    >
      {/* ✅ Page Header */}
      <header className="w-full  text-center py-6  border-gray-700">
        <h1 className="text-3xl font-bold mb-2">Dashboard Layout</h1>
        <p className="text-gray-500 text-base">
          TooLex offers a wide range of stunning dashboards, apps, prototypes, components, and forms:
        </p>
      </header>

      {/* ✅ Page Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`w-20 md:w-60 p-3 flex flex-col sticky top-0 self-start h-screen transition-colors duration-300 ${darkMode ? "bg-black text-white" : " text-black"
            }`}
        >
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 p-3 rounded-lg transition w-full
                ${active === item.name
                  ? `bg-gradient-to-r ${themeColors[primaryColor]} text-white`
                  : `${darkMode
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-black hover:bg-gray-200"
                  }`
                }
              `}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-2 md:ml-6 lg:ml-8 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 pb-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {templates[active]?.map((tpl) => (
                <div
                  key={tpl.title}
                  onClick={() => window.open(tpl.path, "_blank")}
                  className="group cursor-pointer"
                >
                  {/* Image with overlay */}
                  <div className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                    <img
                      src={tpl.img}
                      alt={tpl.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  {/* Floating Info Box */}


                  <div
                    className="relative z-10 -mt-8 mx-auto w-[90%] bg-[#1c1c1e]/90 backdrop-blur-md
               rounded-lg p-2 shadow-lg text-center transition-all duration-500 
               group-hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-semibold text-white">{tpl.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{tpl.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
