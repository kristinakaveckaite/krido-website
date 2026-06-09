import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // KRIDO brand palette — pulled from the live site's theme color.
        // Adjust these to match the exact Framer values if you have them.
        forest: "#0E5E47", // primary brand green (meta-theme-color)
        "forest-dark": "#0A4435",
        cream: "#F6F3EC", // warm off-white background
        sand: "#EDE7DA",
        ink: "#1C1C1A", // near-black text
        muted: "#6B6B66",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
