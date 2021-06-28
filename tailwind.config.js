// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Jura', 'system-ui','-apple-system', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji']
    },
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