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
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-200px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(200px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        slideOut: {
          '0%': {
            left: '-10px',
            opacity: '0.8',
          },
          '50%': {
            left: '-300px',
            opacity: '0.5',
          },
          '100%': {
            left: '-380px',
            opacity: '0',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(250px)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        beat: {
          '0%': {
            transform: 'scale(0.9)',
            boxShadow:
              '0 0 0 0 rgba(56, 108, 226, 0.5), 0 0 0 0 rgba(56, 108, 226, 0.4)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow:
              '0 0 0 50px rgba(56, 108, 226, 0), 0 0 0 100px rgba(56, 108, 226, 0)',
          },
          '100%': {
            transform: 'scale(0.9)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s',
        slideIn: 'slideIn 1s',
        slideLeft: 'slideLeft 1s',
        slideOut: 'slideOut 1s',
        slideUp: 'slideUp 2s',
        beat: 'beat 2s infinite',
      },
    },
  },
  plugins: [],
};
