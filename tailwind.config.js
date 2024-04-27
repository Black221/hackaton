/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#274754",
        "yellow-1": "#e8c468",
        "brown-1": "#f4a462",
        "red-1": "#e76e50",
        "red-2": "#ff6e61",
        "yellow-2": "#f9c54e",
        "green-2": "#91be6f",
        "green-3": "#43a889",
        "blue-2": "#56758f"
      },
      backgroundColor: {
        "blue-1": "#274754",
        "green-1": "#274754",
        "yellow-1": "#e8c468",
        "brown-1": "#f4a462",
        "red-1": "#e76e50",
        "red-2": "#ff6e61",
        "yellow-2": "#f9c54e",
        "green-2": "#91be6f",
        "green-3": "#43a889",
        "blue-2": "#56758f"
      }
    },
  },
  plugins: [],
}