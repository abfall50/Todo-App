/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "box": "var(--bg-box)",
        "text-color": "var(--text-color)",
        "text-color-footer": "var(--text-color-footer)",
        "hover-text-1": "var(--hover-text-footer1)",
        "hover-text-2": "var(--hover-text-footer2)",
        "circle-outline": "var(--circle-outline)",
        "todo-border": "var(--todo-border)",
        "placeholder": "var(--placeholder)",
        "footer": "var(--footer)",
      },
      backgroundImage: {
        "mobile-bg": "var(--mobile-bg)",
        "desktop-bg": "var(--desktop-bg)",
      },
    },
  },
  plugins: [],
};
