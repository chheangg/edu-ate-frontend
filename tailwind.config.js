/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
    colors: {
      'purple-100': '#7469B6',
      'purple-200': '#AD88C6',
      'purple-300': '#E1AFD1',
      'purple-400': '#FFE6E6',
      'primary-black': '#000',
      'primary-white': '#fff',
    },
    fontFamily: {
      'main': ["'Baloo Paaji 2'", 'san serifs']
    }
  },
  plugins: [
    require('daisyui'),
  ],
}