/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1: "150px",
        logo: "300px",
      },
      height: {
        1: "800px",
      },
      maxHeight: {
        1: "800px",
      },
      translate: {
        1: "174px",
      },
    },
    colors: {
      primary: "#503966",
      secondary: "#7a6b88",
      tertiary: "#ad6845",
      white: "#fef3e7",
      light: "#e8cfc5",
      gray: "#e6e2fe",
      dark: "#2d1f3a",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Roboto Slab Variable", "sans-serif"],
    },
  },
  plugins: [],
}
