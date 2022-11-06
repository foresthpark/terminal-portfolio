/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        term: {
          "text-primary": "#d29720",
          "text-secondary": "#a65d7e",
          background: "#282828",
          white: "#c7b796",
          "text-error-primary": "#cb241e",
          "text-error-secondary": "#382826",
          "text-success-primary": "#98971a",
          "text-succes-secondary": "#5a865d",
        },
      },
    },
  },
  plugins: [],
};
