/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "770px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        gray: "#DBDBF3",
        "light-gray": "#31374D1A",
        "custom-black": "#14191C",
        "dark-gray": "#333333",
        "custom-gray" : "#CECECE"
      }
    },
  },
  plugins: [],
}