// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },

    extend: {
      spacing: {
        "96": "24rem",
        "128": "32rem"
      },
      colors: {
        "mat-primary": "#3f51b5",
        "mat-primary-dark": "#334192"
      },
      boxShadow: {
        header: "0 3px 3px rgba(0,0,0,.3)"
      }
    }
  },
  variants: {
    appearance: ["responsive"],
    backgroundColors: ["responsive", "hover", "focus"],
    fill: []
  },
  plugins: [
    require("tailwindcss-transforms"),
    require("tailwindcss-transitions"),
    require("tailwindcss-border-gradients")
  ]
};
