/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      splash: ["Splash , cursive"],
    },
    extend: {
      flexGrow: {
        2: "2",
      },
    },
  },
  plugins: [],
};
