/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1B1B1E',
        grey: '#4A4240',
        smoke_grey: '#ECD184',
        blackberry: '#302D2E',
        gold: '#9E7758',
        brown: '#705748',
        weird_grey: "#C2C1BF",
        cream: "#E5E0DA",
      },
      fontFamily: {
        'forum': ['Forum', 'serif'],
        'antic-didone': ['Antic Didone', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'fraunces': ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
