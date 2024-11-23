/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "local-image":
          "url('https://t4.ftcdn.net/jpg/05/56/84/37/360_F_556843786_CFAv2Zjmxi4w1NCnfQ8PHCiDgmBxregg.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // 'Roboto' from Google Fonts
      },
    },
  },
  plugins: [],
};
