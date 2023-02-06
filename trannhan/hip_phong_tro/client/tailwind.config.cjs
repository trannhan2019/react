/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary1: "#1266dd",
        secondary2: "#f73859",
      },
    },
  },
  plugins: [],
};
