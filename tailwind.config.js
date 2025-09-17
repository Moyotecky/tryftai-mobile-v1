/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cfe4e2",
          200: "#9fc8c5",
          300: "#6fada8",
          400: "#3f918b",
          500: "#0f766e",
          600: "#0c5e58",
          700: "#094742",
          800: "#062f2c",
          900: "#031816"
        },
        sky_light: {
          100: "#fdfdfe",
          200: "#fbfcfc",
          300: "#fafafb",
          400: "#f8f9f9",
          500: "#f6f7f8",
          600: "#c5c6c6",
          700: "#949495",
          800: "#626363",
          900: "#313132"
        },
        dark_blue: {
          100: "#cdced3",
          200: "#9b9ea7",
          300: "#686d7a",
          400: "#363d4e",
          500: "#040c22",
          600: "#030a1b",
          700: "#020714",
          800: "#02050e",
          900: "#010207"
        },
      }
    },
  },
  plugins: [],
};
