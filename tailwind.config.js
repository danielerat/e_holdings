/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //Adding google fonts
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //Addin our custom color
        "site-gray-1": "#102A43",
        "site-gray-2": "#334E68",
        "site-gray-3": "#627D98",
        "site-green-1": "#014D40",
        "site-green-2": "#27AB83",
        "site-green-3": "#3EBD93",
        "site-white-1": "#F0F4F8",
        "site-white-2": "#D9E2EC",
        "site-white-3": "#BCCCDC",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
      },
    },
  },
  variants: {
    //Adding first so we can be able to apply designs on a first child
    margin: ["first"],
  },
  plugins: [],
};
