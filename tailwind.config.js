/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#403F3F",
      white: "#ffffff",
      dark07: "#F3F3F3",
      dark06: "#E7E7E7",
      rose600: "#D72050",
      orange: "#FF8C47",
    },
  },
  plugins: [require("daisyui")],
  themes: ["light"],
};
