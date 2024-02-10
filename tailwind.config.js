/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url(/src/assets/images/webp/headerbg.webp)",
        buttonbg: "url(/src/assets//images/webp/button.webp)",
        section1bg: "url(/src/assets/images/webp/section1bg.webp)",
        section2bg: "url(/src/assets/images/webp/section2bg.webp)",
      },
      keyframes: {
        cycleright: {
          "0%": { left: "50%", rotate: "y 0deg" },
          "50%": {
            left: "100%",
            rotate: "y 0deg",
          },
          "60%": { left: "100%", rotate: "y 180deg" },

          "100%": { left: "50%", rotate: "y 180deg" },
        },
        cycleleft: {
          "0%": { left: "77%", rotate: "y 0deg" },
          "30%": {
            left: "0%",
            rotate: "y 0deg",
          },
          "40%": { left: "0%", rotate: "y 180deg" },
          "45%": { left: "0%", rotate: "y 180deg" },
          "80%": { left: "100%", rotate: "y 180deg" },
          "85%": { left: "100%", rotate: "y 0deg" },
          "100%": { left: "77%", rotate: "y 0deg" },
        },
        cycleleft2: {
          "0%": { left: "50%", rotate: "y 0deg" },
          "30%": {
            left: "0%",
            rotate: "y 0deg",
          },
          "40%": { left: "0%", rotate: "y 180deg" },
          "45%": { left: "0%", rotate: "y 180deg" },
          "80%": { left: "100%", rotate: "y 180deg" },
          "85%": { left: "100%", rotate: "y 0deg" },
          "100%": { left: "50%", rotate: "y 0deg" },
        },
      },
      animation: {
        cycleright: "cycleright 8s linear infinite",
        cycleleft: "cycleleft 8s linear infinite",
        cycleleft2: "cycleleft 8s linear infinite",
      },
    },
    fontFamily: {
      chewy: ["Chewy"],
      balsamiq: ["Balsamiq Sans"],
    },
  },
  plugins: [],
};
