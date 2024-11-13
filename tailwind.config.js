/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbg: "#FFFFF0",
        orange: "#F95C19",
        background: "#FFF7E7",
        text: "#464558",
      },
      fontFamily: {
        heading: ["Oxanium"],
        body: ['"Raleway"'],
      },
      backgroundImage: {
            playbg: "url('src/assets/playback.png')"
      },
    },
  },
  plugins: [],
};
