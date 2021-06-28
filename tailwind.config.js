const defaultTheme = require('tailwindcss/defaultTheme')  // requires default theme to add to default classes
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Jura', 'sans-serif'],
        'title': ['Play', 'sans-serif'],
        sans: ['Jura', ...defaultTheme.fontFamily.sans,]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}