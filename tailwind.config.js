/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1: "150px",
        2: "200px",
        3: "300px",
        4: "400px",
        5: "500px",
        6: "600px",
        7: "700px",
        7.5: "750px",
        8: "800px",
        mid: "50%",
        logo: "300px",
      },
      maxWidth: {
        4: "400px",
        5: "500px",
        7: "700px",
      },
      height: {
        1: "800px",
        mid: "50%",
        about: "550px",
      },
      maxHeight: {
        1: "800px",
      },
      translate: {
        1: "174px",
      },
      scale: {
        zoom: "1.2",
      },
    },
    colors: {
      primary: "#503966",
      primary_transparent: "#50396680",
      secondary: "#7a6b88",
      tertiary: "#ad6845",
      white: "#fef3e7",
      light: "#e8cfc5",
      gray: "#e6e2fe",
      dark: "#292929",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Roboto Slab Variable", "sans-serif"],
    },
  },
  plugins: [],
}
