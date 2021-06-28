// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Jura', 'sans-serif'],
        'title': ['Play', 'sans-serif']
      },
      backgroundImage: theme => ({
        'night-computer': "url('src/img/backgrounds/pexels-josh-sorenson-1714208 (3).jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}