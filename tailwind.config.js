/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-rgba": "rgba(20, 5, 36, 0.95)",
      },
    },
  },
  plugins: [],
};
