module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        black_900_7e: "#0000007e",
        amber_A400_a7: "#ffc700a7",
        black_900_b2: "#000000b2",
        amber_A400_a2: "#ffc700a2",
        gray_900_ab: "#191d24ab",
        red_800: "#d61726",
        amber_A400: "#ffc700",
        gray_50: "#f8f8f8",
        light_blue_800: "#0071bc",
        amber_A401: "#f3cb02",
        green_A700: "#00b650",
        black_900: "#000000",
        black_900_63: "#00000063",
        black_901: "#0a0c0e",
        gray_900_a2: "#191d24a2",
        amber_A400_9e: "#ffc7009e",
        pink_800: "#ab5656",
        red_A700: "#d40e14",
        gray_501: "#a8a8a8",
        gray_600: "#838282",
        gray_502: "#999999",
        black_900_a2: "#000000a2",
        gray_500: "#9c9c9c",
        gray_800: "#434447",
        gray_503: "#a4a4a4",
        gray_900: "#191d24",
        gray_801: "#393939",
        lime_900: "#a3820b",
        gray_504: "#a6a6a6",
        bluegray_100: "#d1d1d1",
        gray_200: "#eaeaea",
        gray_300: "#e4e4e4",
        bluegray_900: "#333333",
        bluegray_700: "#444e69",
        black_900_99: "#00000099",
        black_900_71: "#00000071",
        amber_A400_ab: "#ffc700ab",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius2: "2px",
        radius10: "10px",
        radius18: "18px",
        radius20: "20px",
        radius26: "26px",
        radius50: "50%",
      },
      fontFamily: {
        pfdindisplaypro: "PF DinDisplay Pro",
        verdana: "Verdana",
        circe: "Circe",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000071,#00000071)",
        gradient1: "linear-gradient(180deg ,#000000b2,#000000b2)",
      },
      textShadow: { ts: "4px 4px  30px #a3820b" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
