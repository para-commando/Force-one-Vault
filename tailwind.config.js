/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './tailwind-custom.css'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'armyBackgroundColor': "url('/src/assets/backgroundImg.jpeg')",
      }
    },
  },
  plugins: [],
}