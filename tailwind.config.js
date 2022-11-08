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
        fraunces: ["Fraunces72ptsupersoft", "Fraunces"],
        poppins: ["Geomanist", "Poppins"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontSize: {
        13: "13px",
        11: "11px",
        12: "12px",
        18: "18px",
        20: "20px",
        22: "22px",
        30: "30px",
        37: "37px",
        39: "39px",
        40: "40px",
        61: "61px",
        70: "70px",
        80: "80px",
      },

      lineHeight: {
        1.6: "1.6em",
        1.1: "1.1em",
        54: "54px",
      },
      width: {
        100: "6.25rem",
        50: "3.125rem",
        60: "3.75rem",
        140: "8.75rem",
        358: "22.375rem",
        593: "37.063rem",
      },

      height: {
        68: "4.291rem",
        50: "3.125rem",
        120: "7.5rem",
        smaller: "3px",
        364: "22.75rem",
        603: "37.688rem",
      },

      maxWidth: {
        300: "18.75rem",
        710: "44.375rem",
        "8/10": "83%",
        408: "25.5rem",
      },

      padding: {
        100: "6.25rem",
        76: "4.75rem",
      },
      borderWidth: {
        3: "3px",
      },

      borderRadius: {
        "8/10": "80%",
        "1/1": "100%",
        "5/10": "50%",
        "6/10": "60%",
      },

      letterSpacing: {
        4: "0.25rem",
      },
      colors: {
        "primary-chocolate": "#d4ac8e",
        "secondary-chocolate": "#c47d57",
        "hero-text": "#e4ded5",
        "dark-chocolate": "#b55730",
        "primary-blue": "#223240",
        "primary-red": "#d90f54",
        "tweeter-blue": "#1da1f2",
        "icon-border": "rgba(181,87,48,.5);",
        "linkedin-blue": "#2977c9",
        "facebook-blue": "#4267b2",
        "instagram-red": "#e4405f",
        "youtube-red": "#c4302b",
        "clutch-dark-blue": "#16313a",
        "envelope-slate": "#223240",
        "start-red": "#FF3D2E",
        "BBB-slate": "#2d4850",
        "card-slate": "#2E464D",
      },
      backgroundImage: {
        primary: "linear-gradient(270deg,#302f39,#223240 95%);",
        grain: "url('/images/grain-bg.webp');",
        dot: "url('/vectors/pattern-dot-white1.svg')",
        "body-bg":
          "url('/images/grain-bg.webp'),linear-gradient(180deg,rgba(213,173,143,.3),rgba(213,173,143,.3)),url('/vectors/body-bg.svg');",
      },
      backgroundSize: {
        "body-bg-size": "50px,auto,cover",
        "grain-size": "50px",
      },
    },
  },
  plugins: [],
};
