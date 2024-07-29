/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mb': '320px',
      // => @media (min-width: 320px) { ... }

      'tb': '648px',
      // => @media (min-width: 648px) { ... }

      'lp': '1024px',
      // => @media (min-width: 1024px) { ... }

      'dp': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [

    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "none",
          scrollbarcolor : "rgb(0 0 0 0) white"
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width: "0px"
          },
          "&::-webkit-scrollbar-track" : {
            backgroundColor: "transparent",
            borderRadius: "20px",
          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }

  ],
}



