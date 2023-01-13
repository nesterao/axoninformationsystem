/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./assets/js/main.js"],
  theme: {
    extend: {
      inset: {
        100: "100%",
      },
      colors: {
        primary: "#004C7F",
        secondary: "#F8A527",
        neutral: "#5B5B5B",
      },
    },
  },
  plugins: [],
  variants: {},
};
