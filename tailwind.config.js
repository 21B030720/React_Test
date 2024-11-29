/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
      colors: {
        'custom-light-gray': '#AFB7CA',
        'custom-blue': '#AFB7CA',
        'custom-text': '#5F6B88',
      },
    },
  },
  plugins: [],
}

