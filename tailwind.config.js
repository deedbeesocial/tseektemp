/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {

      colors: {
        blue: "#0064b7",
        green: "#419a00",
        orange:"#ff9a00",
      },
    },
  },
  plugins: [],
}
