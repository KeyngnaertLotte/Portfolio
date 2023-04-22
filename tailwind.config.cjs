/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      heading: [
        'gravesend-sans',
        'Arial',
        'Helvetica',
        'sans-serif',
      ],
      body: [
        'segoe ui',
        'sans-serif',
        'Arial',
        'Helvetica',
      ],
      special: [
        'Highest Praise',
        'gravesend-sans',
      ],
    },
    extend: {
      colors: {
        accent: '#d4af37',
      },
    },
  },
  plugins: [],
}
