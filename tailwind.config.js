/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "colour-2": "linear-gradient(91.11deg, #0CF637 50%, #950DFF 100%)",
        background1: "url(./public/signupimage.jpg)",
      },
      boxShadow: {
        custom: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "colour-2": "linear-gradient(91.11deg, #0CF637 50%, #950DFF 100%)",
      },
    },
  },
  plugins: [],
};
