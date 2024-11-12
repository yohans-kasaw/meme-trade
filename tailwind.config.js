/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#44E19F", // green
        secondary: "#CDD500", // yellow

        background: "000000",

        accent: "#EF268E", // purple
        highlight: "#00C2FF", // blue

        primaryBlack: "#000000", // Primary dark color
        darkGray: "#1B1B1B", // Dark gray for backgrounds or containers
        midGray: "#2F2E2E", // Mid-gray for UI elements or secondary backgrounds

        accentGreen: "#44E19F", // Soft green for accents or highlights
        accentBlue: "#00C2FF", // Bright blue accent for links or CTAs
        accentPink: "#FF2897", // Bold pink for emphasis or highlights
        accentLime: "#CDD500", // Lime for alert or notification
        accentBrightGreen: "#0CD40B", // Bright green for success messages or indicators
      },
      fontSize: {
        // Override the 'xs' size
        xs: "0.6rem",
      },
    },
  },
  plugins: [],
};
