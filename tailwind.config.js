module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      minHeight: {
        14: '3.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
