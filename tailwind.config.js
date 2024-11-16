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
        grayText: "#888888", // Gray text color
        primary: "#44E19F", // green
        secondary: "#CDD500", // yellow

        background: "000000",

        accent: "#EF268E", // purple
        highlight: "#00C2FF", // blue

        primaryBlack: "#000000", // Primary dark color
        darkGray: "#1B1B1B", // Dark gray for backgrounds or containers
        midGray: "#2F2E2E", // Mid-gray for UI elements or secondary backgrounds
        lightGray: "#343434",
        midLightGray: "#888888", // Mid-light gray for text or secondary text

        accentGreen: "#44E19F", // Soft green for accents or highlights
        accentBlue: "#00C2FF", // Bright blue accent for links or CTAs
        accentPink: "#FF2897", // Bold pink for emphasis or highlights
        accentLime: "#CDD500", // Lime for alert or notification
        accentBrightGreen: "#0CD40B", // Bright green for success messages or indicators
        lightBlue: "#006F92", // Light blue for secondary CTAs or links
      },
      fontSize: {
        // Override the 'xs' size
        xs: "clamp(12px,calc(0.4vw + 0.4rem),26px)",
      },
    },
  },
  plugins: [],
};
