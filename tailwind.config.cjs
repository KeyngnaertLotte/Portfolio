/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      heading: ['gravesend-sans', 'Arial', 'Helvetica', 'sans-serif'],
      body: ['segoe ui', 'sans-serif', 'Arial', 'Helvetica'],
      special: ['highest-praise', 'sans-serif'],
    },
    screens: {
      web: '840px',
      tablet: '560px',
    },
    extend: {
      colors: {
        accent: '#B27F00',
      },
      gridTemplateRows: {
        layout: 'repeat(2, minmax(0, 0.4fr))',
        tablet: '100px minmax(0, 0.3fr) minmax(0, 0.3fr)',
        mobile: '100px repeat(4,minmax(0, auto))',
        web: '100px minmax(0, 0.3fr) minmax(0, 0.3fr)',
      },
      blur: {
        xs: '2px',
      },
      brightness: {
        25: '.25',
      },
      gridRowEnd: {
        '1': '1',
        '2' :'2',
        '3' :'3',
        '4' :'4',
        '5' :'5',
        '6' :'6',
        '7' :'7',
        '8': '8',
        '9': '9',
        '10': '10',
      },
      gridRowStart: {
        '1': '1',
        '2' :'2',
        '3' :'3',
        '4' :'4',
        '5' :'5',
        '6' :'6',
        '7' :'7',
        '8': '8',
        '9': '9',
        '10': '10',
      },
    },
  },
  plugins: [],
}
