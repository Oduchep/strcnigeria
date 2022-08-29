/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002e5d',
        'primary-2': '#BA9764',
        'primary-3': '#fcf8ed',
        'primary-lighter': '#002e5db0',
        'primary-light': '#002e5dd9',
        'primary-2-light': '#ba976499',
        'primary-3-dark': 'f7f5e1',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/altar.JPG')",
        'hero-pattern-2': "url('/assets/images/altar-2.JPG')",
      },
    },
  },
  plugins: [],
};
