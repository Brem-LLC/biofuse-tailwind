/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        polygon: "linear-gradient(to right, rgba(0,0,0,.25),rgba(0,0,0,.3) , rgba(0,0,0,.2)),url(/src/assets/images/polygons.png)",
      },
      colors: {
        primary: {
          DEFAULT: "#45a9e8",
        },
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/typography")],
};
