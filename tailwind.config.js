/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'indow': '#8CC6D2',
      'white': '#ffffff',
      'indow-yellow': '#FFBD29'
    },
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

