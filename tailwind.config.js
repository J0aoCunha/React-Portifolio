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
        base: "#0B0D12",
        panel: "#12151C",
        "panel-alt": "#181C25",
        line: "#262B36",
        ink: "#E6E6E6",
        muted: "#7C8394",
        accent: "#7EE787",
        amber: "#E3B341",
        info: "#59C2FF",
        magenta: "#D2A8FF",
      },
    },
  },
  plugins: [],
}

