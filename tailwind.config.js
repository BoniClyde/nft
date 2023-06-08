const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    colors: {
      primary: colors.blue,

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
