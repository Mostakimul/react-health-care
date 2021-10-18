module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      fira: ['Fira Sans', 'sans-serif'],
    },
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
