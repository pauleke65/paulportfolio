module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
     '100': 100
    },
    extend: {
      left: {
        '-100p': '-100%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
