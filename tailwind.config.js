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
        ink: {
          100: "#d7d8dc",
          200: "#afb1b8",
          300: "#868b95",
          400: "#5e6471",
          500: "#363d4e",
          600: "#2b313e",
          700: "#20252f",
          800: "#16181f",
          900: "#0b0c10"
        },
        cyan_primary: {
          100: "#cee9f0",
          200: "#9cd3e0",
          300: "#6bbdd1",
          400: "#39a7c1",
          500: "#0891b2",
          600: "#06748e",
          700: "#05576b",
          800: "#033a47",
          900: "#021d24"
        },
        background_light: {
          100: "#fafbfd",
          200: "#f6f7fb",
          300: "#f1f3f9",
          400: "#edeff7",
          500: "#e8ebf5",
          600: "#babcc4",
          700: "#8b8d93",
          800: "#5d5e62",
          900: "#2e2f31"
        },
      }
    },
  },
  plugins: [],
};
