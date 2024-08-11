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
        veryLightCyan: 'hsl(189, 41%, 97%)',
        fadeCyan: '#0D686D'
      },
      fontFamily: {
        spaceMono: 'Space Mono'
      },
      fontSize: {
        32: '2rem'
      },
      height: {
        481: '30.063rem'
      },
      width: {
        117: '7.313rem',
        300: '18.75rem',
        379: '23.688rem',
        413: '25.813rem',
        730: '45.625rem',
        920: '57.5rem'
      }
    },
  },
  plugins: [],
}

