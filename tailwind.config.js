/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./services/**/*.html",
    "./industries/**/*.html",
    "./blog/**/*.html",
    "./case-studies/**/*.html",
    "./components.js",
    "./cms-engine.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff5625',
          light: '#ffb5a0',
          dark: '#d94115',
        }
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
