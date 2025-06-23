/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enable dark mode support
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
          },
          'spin-reverse': {
            '0%': { transform: 'rotate(360deg)' },
            '100%': { transform: 'rotate(0deg)' }
          }
        },
        animation: {
          'spin-slow': 'spin 20s linear infinite',
          'spin-slower': 'spin 25s linear infinite',
          'spin-reverse': 'spin-reverse 15s linear infinite'
        }
      },
    },
    plugins: [],
  };
  