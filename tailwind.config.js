/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark theme
        dark: {
          primary: "#1C273C",
          secondary: "#354259",
          text: "#fff",
        },
        // Light theme
        light: {
          primary: "#F7ECDE",
          secondary: "#54BAB9",
          text: "#333",
        },
      },
    },
  },
  plugins: [],
};
