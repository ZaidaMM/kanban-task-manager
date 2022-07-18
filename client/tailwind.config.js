/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['sans-serif', 'Plus Jakarta Sans'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      'purple-100': '#A8A4FF',
      'purple-200': '#635FC7',
      grey: {
        700: '#000112',
        600: '#20212C',
        500: '#2B2C37',
        400: '#3E3F4E',
        300: '#828FA3',
        200: '#E4EBFA',
        100: '#F4F7FD',
      },
      'red-100': '#EA5555',
      'red-200': '#FF9898',
    },
  },
  plugins: [],
};
