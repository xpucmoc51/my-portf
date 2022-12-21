/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        burger: '#2B2020',
        red: '#D13D3D',
        gray: '#D9D9D9',
        bottom: '#1F1F1F',
      },
      fontSize: {
        p: '24px',
        h: '42px',
      },
      screens: {
        header: '1300px',
        tab: '1130px',
        mob: '1000px',
        hobby: '850px',
        min: '567px',
      },
    },
  },
  plugins: [],
};
