/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f6e4da",
        blue: "#e3edf6",
        orange: "#EC5629",
        yellow: "#f7d044",
      },
      fontFamily: {
        sans: ["Familjen Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem"
      },
      backgroundImage: {
        "orange-noise":
          "url('/noise.png'), linear-gradient(180deg, #f6e4da, #f6e4da)",
        "light-noise":
          "url('/noise.png'), linear-gradient(180deg, #fbfcfc, #fbfcfc)",
        "blue-noise":
          "url('/noise.png'), linear-gradient(180deg, #e3edf6, #e3edf6)",
      },
    },
  },
  plugins: [],
};
