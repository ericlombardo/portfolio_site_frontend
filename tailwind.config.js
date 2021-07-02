const defaultTheme = require('tailwindcss/defaultTheme')  // requires default theme to add to default classes
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FEFFFF',
      black: '#17252A',
      orange: '#F79E02',
      green: '#86C232',
      teal: {
        light: '#00daf7',
        DEFAULT: '#00b2c9',
        dark: '#004d57'
      },
      grey: {
        light: '#d6d6d6',
        DEFAULT: '#949494',
        dark: '#363636'
      }
    },
    extend: {
      rotate: {
        '20': '20deg',
        '40': '40deg',
        '60': '60deg',
        '80': '80deg',
        '100': '100deg',
        '120': '120deg',
        '140': '80deg',
        '160': '90deg',
        '180': '100deg',
        '200': '110deg',
        '220': '120deg',
        '240': '130deg',
        '260': '140deg',
        '280': '280deg',
        '300': '300deg',
        '320': '320deg',
        '340': '340deg'
      },
      fontFamily: {
        'body': ['Jura', 'sans-serif'],
        'title': ['Play', 'sans-serif'],
        sans: ['Jura', ...defaultTheme.fontFamily.sans,]
      },
      backgroundImage: theme => ({
        'night-computer': "url(https://images.pexels.com/photos/3709434/pexels-photo-3709434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1920)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}