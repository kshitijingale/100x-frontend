/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-400": "#a2a2a2",
        "neutral-50": "#f9f9f9",
        "neutral-1000": "#000",
        "gray": "rgba(255, 255, 255, 0.12)",
        "neutral-950": "#0a0a0a",
        "neutral-900": "# 171717",
        "neutral-800": "#262626",
        "neutral-700": "#404040",
        "neutral-600": "#525252",
        "neutral-500": "#737373",
        "neutral-300": "#d3d3d3",
        "neutral-200": "#e4e4e4",
        "neutral-100": "#f4f4f4",
        "red-error": "#8b141a",
        "green-success": "#00be74",
        "card-fill": "#16181c",
        "searchbar-fill": "#212327",
        "blue-wash": "rgba(117, 190, 239, 0.2)",
        "twitter-blue": "#1d9bf0",
        "twtr-blue-hover": "#1871CA",
        "twtr-blue-disabled": "#1E5D87",
        "twitter-white-100": "#fff",
        "secondary": "rgba(255, 255, 255, 0.60)",
        "stroke": "rgba(29, 155, 240, 0.24)",
        "symbol-bg": "rgba(0, 0, 0, 0.60)"
      },
      spacing: {},
      fontFamily: {
        "px-regular": "Inter"
      }
    }
  },
  plugins: [],
}

