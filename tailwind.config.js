/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // Min Dark (miguelsolorio/min-theme) — valores reais do tema
        editor: "#1F1F1F",
        sidebar: "#1A1A1A",
        activitybar: "#1A1A1A",
        statusbar: "#1A1A1A",
        "tab-inactive": "#1A1A1A",
        line: "#2A2A2A",
        ink: "#FAFAFA",
        muted: "#888888",
        "syn-key": "#79B8FF",
        "syn-string": "#FFAB70",
        "syn-comment": "#6B737C",
        "syn-punct": "#BBBBBB",
      },
    },
  },
  plugins: [],
}

