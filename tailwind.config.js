/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        paleWhite: '#ffffff',
        darkBlack: '#000000',
        fadeRed: '#ad3333'
      }
    },
  },
  plugins: [],
}
