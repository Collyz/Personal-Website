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
        'green-950': '#CCE2CB',
      },
      borderColor: {
        'custom-green-border': '#97C1A9',
      }
    }
    
  },
  plugins: [
    plugin(({addBase, theme}) => {
      addBase({
        'html': {color: theme('colors.green.900')},
      });
    })
  ],
}

