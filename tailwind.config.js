/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        "site-gray-4": "#9FB3C8",
        "site-gray-5": "#c8dde3",

        "site-green-1": "#014D40",
        "site-green-2": "#147D64",
        "site-green-3": "#27AB83",
        "site-green-4": "#3EBD93",
        "site-green-5": "#8EEDC7",

        "site-white-1": "#abbbcb",
        "site-white-2": "#BCCCDC",
        "site-white-3": "#e0e4e8",
        "site-white-4": "#F0F4F8",
        "site-white-5": "#ffffff",

        "site-orange-1": "#841003",
        "site-orange-2": "#C52707",
        "site-orange-3": "#F35627",
        "site-orange-4": "#F9703E",
        "site-orange-5": "#FFB088",

        "site-yellow-1": "#8D2B0B",
        "site-yellow-2": "#CB6E17",
        "site-yellow-3": "#F0B429",
        "site-yellow-4": "#FADB5F",
        "site-yellow-5": "#FFF3C4",
      },
      boxShadow: {
        blue: "0 0 3px 3px #102A43",
      },
      cursor: {
        fancy: "url(hand.cur), pointer",
      },
    },
  },
  variants: {
    //Adding first so we can be able to apply designs on a first child
    margin: ["first"],
  },
  plugins: [],
};
