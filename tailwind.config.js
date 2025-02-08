/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C2C2C',
        darkCharcoal: '#1F1F1F',
        gold: '#FFD700',
        primary: '#333333',
        secondary: '#666666',
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 8px 20px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};