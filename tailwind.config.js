const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#452AEC",
        50: "#D8D3FB",
        100: "#C8C0F9",
        200: "#A79AF6",
        300: "#8675F3",
        400: "#664FEF",
        500: "#452AEC",
        600: "#2C12CC",
        700: "#210E98",
        800: "#160965",
        900: "#312578",
        950: "#050217",
      },
      secondary: {
        DEFAULT: '#1E293B',
        50: '#627FAF',
        100: '#5574A7',
        200: '#47618C',
        300: '#3A4F71',
        400: '#2C3C56',
        500: '#1E293B',
        600: '#0B0F16',
        700: '#000000',
        800: '#000000',
        900: '#000000',
        950: '#000000'
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
