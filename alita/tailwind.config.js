/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest'], // Updated to 'Onest'
      },
      colors: {
        customBlue: '#cfeaf8',
      }
    },
  },
  plugins: [],
}
