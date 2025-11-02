import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("indigo");
  const [skin, setSkin] = useState("bordered"); 
  const [lightColor, setLightColor] = useState("slate");
  const [darkColor, setDarkColor] = useState("black");

  const themeColors = {
    indigo: "from-indigo-500 to-indigo-500",
    blue: "from-blue-500 to-blue-500",
    green: "from-green-500 to-green-500",
    purple: "from-purple-500 to-purple-500",
    amber: "from-amber-500 to-amber-500",
    pink: "from-pink-500 to-pink-500",
  };

  const bgClasses = {
    light: {
      slate: "bg-white text-gray-900",
      zinc: "bg-zinc-300 text-gray-900",
      gray: "bg-gray-300 text-gray-900",
    },
    dark: {
      black: "bg-black text-white",
      slate: "bg-black text-white",
      zinc: "bg-black text-white",
    },
  };

  const skinClasses = (dark) => ({
    bordered: `${
      dark ? "bg-black text-white" : "bg-[#f8f9fa] text-gray-900"
    } border border-gray-800 rounded-md`,
    // flat: "rounded-lg border-none shadow-none bg-transparent",
    shadow: `${
      dark ? "bg-[#131314] text-white" : "bg-[#f8f9fa] text-gray-900"
    } rounded-lg shadow-xl border border-transparent`,
  });

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        primaryColor,
        setPrimaryColor,
        skin,
        setSkin,
        lightColor,
        setLightColor,
        darkColor,
        setDarkColor,
        themeColors,
        bgClasses,
        skinClasses,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
