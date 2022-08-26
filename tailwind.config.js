/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors : {
        'primary' : '#11283C',
        'secondary' : '#F66B0E'
      }
    },
  },
  plugins: [],
};
