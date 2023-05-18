/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'neon-green': '#39FF14',
      'forest-green': '#228B22',
      'dark-forest-green': '#1B6F1B',
      'light-gray': '#C0C0C0',
      'medium-gray': '#B0B0B0',
      'white': '#FFFFFF'
    },
    extend: {
      width: {
        '100px': '100px',
      },
    },
  },
  plugins: [],
}

