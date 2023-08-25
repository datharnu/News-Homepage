/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'min': '320px', 'max': '1023px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'lg': { 'min': '1024px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      colors: {
        softorange: "hsl(35, 77%, 62%)",
        softred: "hsl(5, 85%, 63%)",
        offwhite: "hsl(36, 100%, 99%)",
        grayishblue: "hsl(233, 8%, 79%)",
        darkgrayishblue: "hsl(236, 13%, 42%)",
        verydarkblue: "hsl(240, 100%, 5%)"
      }
    },
  },
  plugins: [],
}
