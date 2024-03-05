/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text1: "hsl(var(--text1)/<alpha-value>)",
        text2: "hsl(var(--text2)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
        top_bg :"hsl(var(--top-bg-pattern)/<alpha-value>)",
        card_bg :"hsl(var(--card-bg)/<alpha-value>)",
        card_bg_hover :"hsl(var(--card-bg-hover)/<alpha-value>)",
      }
    },
  },
  plugins: [],
}
