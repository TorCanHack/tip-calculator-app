/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {

      colors : {
        mainCyan: '#C5E4E7',
        blueGray: '#5E7A7D',
        cyantext: '#547878',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(189, 41%, 97%)',
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        veryLightCyan: 'hsl(189, 41%, 97%)'
      },
      fontFamily: {
        spaceMono: 'Space Mono'
      },
      fontSize: {
        32: '2rem'
      }
    },
  },
  plugins: [],
}

