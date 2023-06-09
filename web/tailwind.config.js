/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      xxs: '100px',
      xs: '300px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'black': '#000000',
      'invalid-red': '#ED3419',
      'neon-green': '#39FF14',
      'modern-green-light': '#00CC82',
      'modern-green-dark': '#3AB52E',
      'forest-green': '#228B22',
      'dark-forest-green': '#1B6F1B',
      'button-green': '#A2C046',
      'blue': '#0000FF',
      'light-gray': '#C0C0C0',
      'medium-gray': '#B0B0B0',
      'modal-bg-gray': 'rgba(0, 0, 0, 0.3)',
      'white': '#FFFFFF'
    },
    extend: {
      width: {
        '100px': '100px',
        '90%': '90%'
      }
    },
  },
  plugins: [],
}

