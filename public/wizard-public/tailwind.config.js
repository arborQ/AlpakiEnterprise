module.exports = {
  purge: ['./src/**/*.{tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      blur: {
        xs: '2px',
      }
    },
    backgroundColor: theme => ({
      primary: '#1A3365',
      secondary: '#FFBB00',
      alternative: '#FF4343',
      light: "#EEEEEE",
      dark: "#171717"
    }),
    textColor: {
      primary: '#FFBB00',
      secondary: '#1A3365',
      alternative: '#FF4343'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
