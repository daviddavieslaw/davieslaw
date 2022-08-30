/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'max': '400px' },
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1236px',
      '2xl': '1536px'
    },
    extend: {
      boxShadow: {
        'lg': '2px 2px 10px -2px rgb(228, 228, 228)',
        'contentShadow': '-86px -42px 179px 138px #fff',
      },
      fontSize: {
        'hero-h1': 'clamp(2rem, 7vw, 8rem)',
        'hero-subtitle': 'clamp(1rem, 5vw, 1.4rem)',
        'section-h2': 'clamp(2.2rem, 7vw, 4rem)',
        'contact-h3': 'clamp(1.6rem, 5vw, 3rem)',
        'contact-h4': 'clamp(1.1rem, 3vw, 1.6rem)'
      },
      maxWidth: {
        'section': '1400px'
      },
      textColor: {
        'paragraph': '#354e66'
      }
    },
    fontFamily: {
      'garamond': 'EB Garamond',
      'ibarra': 'Ibarra',
      'nunito': 'Nunito',
      'quicksand': 'Quicksand'
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"]
  },
  darkMode: "class"
}