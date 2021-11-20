module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Barlow"', "sans-serif"],
      },
      backgroundImage: {
        header: "url('../src/images/desktop/image-header.jpg')",
      },
    },
    colors: {
      red: {
        DEFAULT: "hsl(7, 99%, 70%)",
      },
      yellow: {
        DEFAULT: "hsl(51, 100%, 49%)",
      },
      cyan: {
        400: "hsl(200, 100%, 62%)",
        600: "hsl(198, 62%, 26%)",
        900: "hsl(167, 40%, 24%)",
      },
      blue: {
        600: "hsl(198, 62%, 26%)",
        900: "hsl(212, 27%, 19%)",
      },
      "grayish-blue": {
        400: "hsl(210, 4%, 67%)",
        700: "hsl(232, 10%, 55%)",
        900: "hsl(213, 9%, 39%)",
      },
      white: {
        DEFAULT: "hsl(0, 0%, 100%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
