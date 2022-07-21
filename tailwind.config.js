/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {

      colors: {
        blue: "#2175d9",
        green: "#57b33e",
        orange:"#ffb511",
        
      },
    },
  },
  plugins: [],
}
