import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "intro": "repeat(5, min-content)"
      },
      fontFamily: {
        sans: ["Squada", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
