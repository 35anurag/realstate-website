/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container:{
    padding: {
      sm: '1rem',
      lg: '2rem', 
    }
  },
    screens: {
      sm: '640px',
      md: '760px',
      lg: '1024px',
      xl: '1230px',
    },
    extend: {
      colors:{
        primary: '#101828',
        secondary: '#7F56D9',
      },
      boxShadow: {
        shadow: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}

