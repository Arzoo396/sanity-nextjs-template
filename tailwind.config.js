/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    colors: {
      sectionBgColor: 'rgb(66,121,148)',
      primaryFontColor: '#292929',
      primarybtnTxt: '#004F3A',
      primarybtnHoverTxt: '#BBCB34',
      primarybtnBg: '#BBCB34',
      bgHeroColor: '#eaf1f0',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}