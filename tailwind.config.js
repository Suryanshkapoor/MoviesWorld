/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "others":{'min':'360px', 'max':'1264px'}
      }
    },
  },
  plugins: [],
}

