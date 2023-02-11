/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#f6e4da",
        bluish: "#e3edf6",
        orange: "#EC5629",
        yellow: "#f7d044",
      },
      fontFamily: {
        sans: "var(--display-font)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      backgroundImage: {
        "orange-noise":
          "url('/noise.png'), linear-gradient(180deg, #f6e4da, #f6e4da)",
        "light-noise":
          "url('/noise.png'), linear-gradient(180deg, #fbfcfc, #fbfcfc)",
        "blue-noise":
          "url('/noise.png'), linear-gradient(180deg, #e3edf6, #e3edf6)",
        "dark-noise":
          "url('/noise.png'), linear-gradient(180deg, #111111, #111111)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
