/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "local-image": "url('./src/assets/usgs-eAGoXRFiysw-unsplash.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // 'Roboto' from Google Fonts
      },
    },
  },
  plugins: [],
};
