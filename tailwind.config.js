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
