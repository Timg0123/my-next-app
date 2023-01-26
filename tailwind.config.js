/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      boxShadow: {
        '6xl': '0 0 30px 1px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
