/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primaryColor': '#1f95bd',
            'iconColor': '#f1b66a',
            'priceTextColor': '#990033',
            'textLightColor': '#595959',
            'headColor': '#1f95bd',
        }
    },
  },
  plugins: [],
}
