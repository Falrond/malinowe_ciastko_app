module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      almostFull: 'calc(100vh - 10rem)',
    },
    fontFamily: {
      roboto: ['Roboto'],
      robocondensed: ['Roboto Condensed'],
      staatliches: ['Staatliches'],
    },
    extend: {
      height: {
        fullwonavbar: 'calc(100vh - 10rem)',
      },
      colors: {
        pinky: '#F249A6',
        pinkyLight: '#FFEBF6',
        beige: '#BFA08E',
        mainBrown: '#73523F',
        mainYellow: '#F2B544',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
