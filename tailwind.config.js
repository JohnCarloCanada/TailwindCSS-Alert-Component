/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  theme: {
    extend: {
      keyframes: {
        showSlide: {
          "0%": { transform: "translateX(-100%)" },
          "90%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(5%)" },
        },
      },
      animation: {
        showSlide: "showSlide 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
