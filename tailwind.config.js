/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1B1B",
        secondary: [
          { 100: "#2e2d2d" },
          { 200: "#1F1F1F" },
          { 300: "#1A1A1A" },
          { 400: "#232323" },
        ],
      },
    },
  },

  plugins: [],
};
