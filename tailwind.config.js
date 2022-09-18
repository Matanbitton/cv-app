/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "720px" },

        md: { min: "720px", max: "1074px" },

        lg: { min: "1175px", max: "100vw" },
      },
    },

    plugins: [],
  },
};
