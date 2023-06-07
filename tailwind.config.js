const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    colors: {
      primary: colors.green,
     
      /*     secondary: {
        DEFAULT: "#1E293B",
        50: "#2B7BBE",
        100: "#2771AD",
        200: "#1F5B8C",
        300: "#18456B",
        400: "#103049",
        500: "#091A28",
        600: "#0B0F16",
        700: "#000000",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      }, */

      secondary: colors.slate,
      white: colors.white,
      gray: colors.slate,
      indigo: colors.indigo,
      violet: colors.violet,
      blue: colors.blue,
      slate: colors.slate,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
};
