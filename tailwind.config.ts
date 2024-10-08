import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#F600CE",
        secondary: "#8E24AA",
        active: "#4A148C",
      },
      textColor: {
        tertiary: "#222",
      },
      borderColor: {
        tertiary: "#222",
      },
      screens: {
      "mm": "320px",
      },
    },
  },
  plugins: [],
};
export default config;
