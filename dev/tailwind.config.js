/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'green-950': '#000000',
      }
    }
    
  },
  plugins: [
    plugin(({addBase, theme}) => {
      addBase({
        // or whichever color you'd like
        'html': {color: theme('colors.green.300')},
      });
    })
  ],
}

