/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pink-dark': '#FF5C8D',
        pink: '#FF90BC',
        'pink-light': '#FFC2E3',

        'yellow-dark': '#FFC46E',
        yellow: '#FFD56E',
        'yellow-light': '#FFE9B5',

        'green-dark': '#7BEF8C',
        green: '#B9F18C',
        'green-light': '#D7FFC2',

        'blue-dark': '#5C90FF',
        blue: '#90BCFF',
        'blue-light': '#C2E3FF',

        'purple-dark': '#B28CFF',
        purple: '#D1B2FF',
        'purple-light': '#EFD7FF',
      },
    },
  },
  plugins: [],
};
