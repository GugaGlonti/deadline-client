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
      letterSpacing: {
        title: '1rem',
      },
      spacing: {
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
        '7vh': '7vh',
        '5vh': '5vh',

        '00vh': '90vh',
        '80vw': '80vw',
        '70vw': '70vw',
        '60vw': '60vw',
        '50vw': '50vw',
        '40vw': '40vw',
        '30vw': '30vw',
        '20vw': '20vw',
        '10vw': '10vw',
        '7vw': '7vw',
        '5vw': '5vw',
      },
    },
  },
  plugins: [],
};
