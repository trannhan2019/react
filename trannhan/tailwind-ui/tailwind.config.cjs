/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      splash: ["Splash , cursive"],
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
    },
  },
  plugins: [],
};
