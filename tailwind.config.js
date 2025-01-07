/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #1E3A8A 0%, #1E3A8A 500px, #000000 500px)',
      }
    },
  },
  plugins: [],
}