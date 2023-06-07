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
      // primary: {
      //   DEFAULT: "#452AEC",
      //   50: "#D8D3FB",
      //   100: "#C8C0F9",
      //   200: "#A79AF6",
      //   300: "#8675F3",
      //   400: "#664FEF",
      //   500: "#452AEC",
      //   600: "#2C12CC",
      //   700: "#210E98",
      //   800: "#160965",
      //   900: "#312578",
      //   950: "#050217",
      // },

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
