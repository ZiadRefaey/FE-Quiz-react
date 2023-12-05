/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        darkNavy: "#313E51",
        navy: "#3B4D66",
        grayNavy: "#626C7F",
        lightBlue: "#ABC1E1",
        lightGray: "#F4F6FA",
        green: "#26D782",
        red: "#EE5454",
        lightOrange: "#FFF1E9",
        lightGreen: "#E0FDEF",
        lightSky: "#EBF0FF",
        lightPurple: "#F6E7FF",
      },
      lineHeight: { tightest: 0.875 },
      fontSize: {
        "custom-144": "9rem",
        "custom-88": "5.5rem",
        "custom-64": "4rem",
        "custom-40": "2.5rem",
        "custom-34": "2.25rem",
        "custom-28": "1.75rem",
        "custom-24": "1.5rem",
        "custom-20": "1.25rem",
        "custom-18": "1.125rem",
        "custom-14": "0.875rem",
        "custom-12": "0.75rem",
      },
    },
  },
  plugins: [],
};
