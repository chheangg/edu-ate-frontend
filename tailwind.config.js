/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: '#7469B6',
        200: '#AD88C6',
        300: '#E1AFD1',
        400: '#FFE6E6',
      },
      'primary-black': '#000',
      'primary-white': '#fff',
    },
    fontFamily: {
      'main': ['Baloo Paaji 2', 'san serifs']
    }
  },
  plugins: [
    require('daisyui'),
  ],
}