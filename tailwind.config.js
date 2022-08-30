/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#11283C',
        secondary: '#F66B0E',
      },
    },
    screens: {
      '2xl': { max: '1535px' },

      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },
    },
  },
  plugins: [],
};
