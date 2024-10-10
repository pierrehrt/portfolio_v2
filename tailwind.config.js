/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B7FF",
        secondary: "#00B7FF",
        accent: "#00B7FF",
        bg: "#0f172a",
        nav: "#0D1324",
      },
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },

  plugins: [],
};
