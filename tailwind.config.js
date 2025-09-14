const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        background: "var(--background)",
        text: "var(--text)",
      },
    },
  },
};
