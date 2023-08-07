/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        bodyFont:['Poppins', 'sans-serif'],
        titleFont:['Roboto Flex', 'sans-serif'],
        mainFont:['Oswald', 'sans-serif'],
        mainFont2:['Urbanist', 'sans-seri'],
      }
    },
    colors:{
      bodyColor:"#212428",
      lightText:"#c4cfde",
      black:"#000000",
      white:"#ffffff",
      orange:"orange",
      green:"greenyellow",
      yellow:"pink",
      orangered:"red",
      gray:"#180b32",
      boxBg:"linear-gradient(145deg, #1e2024, #23272b)",
      designColor: "orange"  //"#ff014f"
    },
    boxShadow:{
      shadowone:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
  },
  plugins: [],
}