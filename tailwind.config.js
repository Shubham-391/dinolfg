/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      chewy: ["Chewy"],
      balsamiq: ["Balsamiq Sans"],
    },
    backgroundImage: {
      headerbg: "url(/src/assets/images/headerbg.webp)",
      buttonbg: "url(/src/assets//images/button.webp)",
    },
  },
  plugins: [],
};
