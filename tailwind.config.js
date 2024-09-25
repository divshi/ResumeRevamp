/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#72abe2',
        'background-light': '#e0f0ff',
        'secondary-background-light': '#cce4ff',
        'text-light': '#333333',
        'primary-dark': '#72abe2',
        'background-dark': '#153965',
        'secondary-background-dark': '#1e4b8b',
        'text-dark': '#f4f4f4',
      },
      height: {
        'logo': '40px',
      }
    },
  },
  plugins: [],
}