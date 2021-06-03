const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // overwrite tailwind classes
    extend: {
      // add on to the tailwind classes
      colors: {
        orange: colors.orange,
        teal: colors.teal
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      },
      fontFamily: {
        fun: ['Varela Round', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['even']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
