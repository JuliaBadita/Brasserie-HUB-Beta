module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      gravitas: ['Gravitas One'],
    },
    extend: {},
  },

  plugins: [require('flowbite/plugin')],
}
