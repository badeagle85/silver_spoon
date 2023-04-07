module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      oswald: 'Oswald, sans-serif',
      urbanist: 'Urbanist, sans-serif',
    },
    extend: {
      backgroundImage: {
        highlighter: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #3df366 50%)',
      },
    },
  },
  plugins: [],
};
