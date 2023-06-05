const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#F59E0B",
        50: "#FCE4BB",
        100: "#FBDCA8",
        200: "#FACD81",
        300: "#F8BD59",
        400: "#F7AE32",
        500: "#F59E0B",
        600: "#C07C08",
        700: "#8A5906",
        800: "#543603",
        900: "#1E1401",
        950: "#030200",
      },
      secondary: {
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
      },
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
