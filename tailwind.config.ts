import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Tahoma", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        rose: {
          50: "#fff1f5",
          100: "#ffe4ec",
          200: "#ffc9dc",
          300: "#ff9ec0",
          400: "#ff6ba3",
          500: "#ff3d8a",
          600: "#e91e7a",
        },
        blush: "#fdf2f8",
        lavender: "#f3e8ff",
        cream: "#fffbf7",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.15)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
