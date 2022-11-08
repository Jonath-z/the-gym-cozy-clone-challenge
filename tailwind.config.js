/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: "Merriweather",
        fraunces: "Fraunces",
        poppins: "Poppins",
      },
      width: {
        100: "6.25rem",
      },

      height: {
        68: "4.291",
        smaller: "3px",
      },
      colors: {
        "primary-chocolate": "#d4ac8e",
        "secondary-chocolate": "#c47d57",
        "hero-text": "#e4ded5",
        "dark-chocolate": "#b55730",
        "primary-blue": "#223240",
      },
      backgroundImage: {
        primary: "linear-gradient(270deg,#302f39,#223240 95%);",
        "body-bg":
          "url('/images/grain-bg.webp'),linear-gradient(180deg,rgba(213,173,143,.3),rgba(213,173,143,.3)),url('/vectors/body-bg.svg');",
      },
      backgroundSize: {
        "body-bg-size": "50px,auto,cover",
      },
    },
  },
  plugins: [],
};
