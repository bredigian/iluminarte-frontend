/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "355px",
        sm: "768px",
        lg: "970px",
        xl: "1200px",
        xxl: "1400px",
      },
      width: {
        "0-2": "20px",
        "0-3": "30px",
        "0-5": "50px",
        "0-8": "80px",
        "1-3": "130px",
        1: "150px",
        2: "200px",
        "2-5": "250px",
        3: "300px",
        4: "400px",
        "4-5": "450px",
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
        2: "400px",
        "6-5": "650px",
        mid: "50%",
        product: "500px",
        about: "550px",
      },
      maxHeight: {
        1: "800px",
      },
      translate: {
        navbar: "350px",
        1: "174px",
        "1xs": "80px",
      },
      scale: {
        zoom: "1.2",
      },
      padding: {
        xl: "100px",
        xxl: "200px",
      },
      transitionProperty: {
        bg: "background-color",
      },
    },
    colors: {
      primary: "#503966",
      primary_transparent: "#50396680",
      secondary: "#7a6b88",
      "secondary-light": "#e6e2fe",
      tertiary: "#ad6845",
      white: "#fef3e7",
      light: "#e8cfc5",
      gray: "#e6e2fe",
      dark: "#292929",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Roboto Slab Variable", "sans-serif"],
    },
  },
  plugins: [],
}
