module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {

          blue: {
            50: '#EBFCFF',
            100: '#7AB2FF',
            400: '#154F90',
            600: '#003787'
          },
          orange: {
            600: '#f5651b',
          }
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}