/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#057D88",
        greenSecundary: "#004F56",
        neutralgray: "#fafafa",
        toast: "#FFE5D5",
        secundaryGray: "#EAEDED",
        neutralGreyHigh: "#D6DBDB",
        neutralGreyMedium: "#535F5F",
        labelGrey: "#2A3535",
        greyAgree: "#9AF8AB29",
        alertReproved: "#FBEA6729",
        alertText: "#B35200",
      },
      boxShadow: {
        base: "0px 4px 8px 0px #00000014",
      },
    },
  },
  plugins: [],
};
