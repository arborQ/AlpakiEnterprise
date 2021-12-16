module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A3365',
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
  plugins: [],
}
