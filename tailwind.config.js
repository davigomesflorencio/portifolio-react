/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27272a",
        secondary: "#65656d",
        tertiary: "#acacb4",
        quaternary: "#e4e4e7",
        accent: "#14b8a6",
      },
      fontFamily: {
        primary: ["Cal Sans", ...fontFamily.sans],
        secondary: ["Cal Sans", ...fontFamily.sans],
        calSans: ["Cal Sans",...fontFamily.sans]
      },
    },
  },
  plugins: [],
}

