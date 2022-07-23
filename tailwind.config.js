/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        bot: "-2rem 2rem 30px white",
      },
      aspectRatio: {
        img: "1920 / 850",
        img2: "3840 / 850",
      },
      fontSize: {
        tit: "10vh",
        titm: "12vw",
        hero: "3vh",
        herom: "3.5vw",
      },
      colors: {
        vin1: "#2C3639",
        vin2: "#3F4E4F",
        vin3: "#A27B5C",
        vin4: "#DCD7C9",
        white: "#FFFFFF",
        black: "#000203",
      },
      fontFamily: {
        cursive: ["Splash"],
      },
      spacing: {
        "1/5": "17.25%",
        "1/10": "10%",
        "2/5": "40%",
        "1/20": "5%",
        "3/5": "72%",
        "2s": "200%",
        "3/10": "30%",
        "6/10": "60%",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
