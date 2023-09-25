/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Code Pro', 'monospace'],
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

  plugins: [],
};
