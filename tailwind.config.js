/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}