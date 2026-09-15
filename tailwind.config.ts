import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201d",
        canvas: "#f4f7f5",
        forest: "#0f6b4d",
        mint: "#dff5e9",
        lime: "#c8f26b",
      },
      boxShadow: {
        panel: "0 1px 2px rgba(16, 24, 20, 0.04), 0 8px 24px rgba(16, 24, 20, 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
