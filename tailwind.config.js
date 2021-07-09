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
      fontFamily: {
        'body': ['Jura', 'sans-serif'],
        'title': ['Play', 'sans-serif'],
        sans: ['Jura', ...defaultTheme.fontFamily.sans,]
      },
      backgroundImage: theme => ({
        'texture-dark': "url(https://images.pexels.com/photos/3709434/pexels-photo-3709434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1920)",
        'keyboard-background': "url(https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1920)",
        'computer-background': "url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1920)"
      }),
      animation: {
        'rot10': 'rot10 20s linear infinite',
        'rot20': 'rot20 20s linear infinite',
        'rot30': 'rot30 20s linear infinite',
        'rot40': 'rot40 20s linear infinite',
        'rot50': 'rot50 20s linear infinite',
        'rot60': 'rot60 20s linear infinite',
        'rot70': 'rot70 20s linear infinite',
        'rot80': 'rot80 20s linear infinite',
        'rot90': 'rot90 20s linear infinite',
      },
      keyframes: {
        rot10: {
          '0%': {transform: 'rotate(0deg)'},
          '5%': {transform: 'rotate(10deg)'},
          '95%': {transform: 'rotate(10deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot20: {
          '0%': {transform: 'rotate(0deg)'},
          '10%': {transform: 'rotate(20deg)'},
          '90%': {transform: 'rotate(20deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot30: {
          '0%': {transform: 'rotate(0deg)'},
          '15%': {transform: 'rotate(30deg)'},
          '85%': {transform: 'rotate(30deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot40: {
          '0%': {transform: 'rotate(0deg)'},
          '20%': {transform: 'rotate(40deg)'},
          '80%': {transform: 'rotate(40deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot50: {
          '0%': {transform: 'rotate(0deg)'},
          '25%': {transform: 'rotate(50deg)'},
          '75%': {transform: 'rotate(50deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot60: {
          '0%': {transform: 'rotate(0deg)'},
          '30%': {transform: 'rotate(60deg)'},
          '70%': {transform: 'rotate(60deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot70: {
          '0%': {transform: 'rotate(0deg)'},
          '35%': {transform: 'rotate(70deg)'},
          '65%': {transform: 'rotate(70deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot80: {
          '0%': {transform: 'rotate(0deg)'},
          '40%': {transform: 'rotate(80deg)'},
          '60%': {transform: 'rotate(80deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        rot90: {
          '0%': {transform: 'rotate(0deg)'},
          '45%': {transform: 'rotate(90deg)'},
          '55%': {transform: 'rotate(90deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}