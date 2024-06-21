/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "900px",
      lg: "1200px",
      xl: "1600px",
      xl2: "2400px",
    },
  },
  plugins: [],
};
