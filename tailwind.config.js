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
          "0%": { transform: "translateX(100%+8px)" },
          "90%": { transform: "translateX(-3%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        showSlide: "showSlide 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
