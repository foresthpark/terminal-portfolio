/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        term: {
          black: "#090300",
          red: "#db2d20",
          green: "#01a252",
          yellow: "#fded02",
          blue: "#01a0e4",
          purple: "#a16a94",
          cyan: "#b5e4f4",
          white: "#a5a2a2",
          brightBlack: "#5c5855",
          brightRed: "#e8bbd0",
          brightGreen: "#3a3432",
          brightYellow: "#4a4543",
          brightBlue: "#807d7c",
          brightPurple: "#d6d5d4",
          brightCyan: "#cdab53",
          brightWhite: "#f7f7f7",
          foreground: "#a5a2a2",
          background: "#090300",
          cursorColor: "#a5a2a2",
        },
      },
    },
  },
  plugins: [],
};
