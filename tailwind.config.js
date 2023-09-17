/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },

    extend: {
      fontFamily: {
        boogaloo: ['Boogaloo', 'cursive'],
        genumu: ['Gemunu Libre', 'sans-serif']
      },
      colors: {
        'bakir': '#b87333'       
      }
    },
  },
  plugins: [],
}

