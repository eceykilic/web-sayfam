/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '1500px',
      },
      colors: {
        customb: '#0a0a14',
        customg: "#00ab6b",
        custombl: "#0077b5"
      },
    },
  },
  plugins: [],
}

