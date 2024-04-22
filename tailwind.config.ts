import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-600": "#0E73F6",
        "yellow-600": "#F8C51B",
        "green-600": "#22C348",
        "teal-600": "#1AC19D",
        "red-500": "#F76659",
        "border-primary": "#E5E9EB",
        "secondary-text": "#6E8BB7",
      },
    },
  },
  plugins: [],
};
export default config;
