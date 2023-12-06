/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const jhonsonVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.jhonson-visible': {
      'backface-visibility': 'visible',
    },
    '.jhonson-hidden': {
      'backface-visibility': 'hidden',
    },
  });
});

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Code Pro', 'monospace'],
      },
      scale: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
        250: '2.5',
        300: '3',
        600: '6',
        1000: '10',
      },
      colors: {
        primary: {
          1: '#053B50',
          2: '#2e3d50',
          3: '#64CCC5',
          4: '#EEEEEE',
        },
        secondary: {
          1: '#2e3d50',
          2: '#3b2764',
          3: '#6a4f2b',
          4: '#004264',
          5: '#10161d',
        },
      },
    },
  },

  plugins: [jhonsonVisibility],
};
