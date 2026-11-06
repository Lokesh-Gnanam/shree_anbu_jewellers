import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#49225B",
          dark: "#351644",
          light: "#5A2B6F",
        },
        secondary: {
          DEFAULT: "#6E3482",
          dark: "#572569",
          light: "#7F3E95",
        },
        accent: {
          DEFAULT: "#A56ABD",
          light: "#BE8CD2",
          soft: "#D2A8E3",
        },
        surface: {
          DEFAULT: "#E7DBEF",
          light: "#F0E7F5",
          muted: "#DDD0E7",
        },
        brandbg: {
          DEFAULT: "#F5EBFA",
          darker: "#EFE1F6",
        },
        gold: {
          50: "#FCF8ED",
          100: "#F7EDD2",
          200: "#EFD9A4",
          300: "#E6C374",
          400: "#DFB76C",
          500: "#C6923C", // metallic base
          600: "#A9772B",
          700: "#8F641E",
          800: "#704D17",
          900: "#4F3610",
          light: "#F3E196",
          metallic: "#C6923C",
          bright: "#FFD700",
        },
        branddark: {
          DEFAULT: "#21152A",
          muted: "#4A3B54",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Cormorant Garamond", "serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #ECC875 0%, #C6923C 45%, #DFB76C 70%, #8F641E 100%)",
        "gold-shimmer": "linear-gradient(90deg, #A9772B 0%, #ECC875 30%, #FFF3B8 50%, #ECC875 70%, #A9772B 100%)",
        "purple-hero": "radial-gradient(ellipse at 50% 20%, rgba(110, 52, 130, 0.35) 0%, rgba(73, 34, 91, 0.95) 70%, #351644 100%)",
        "purple-card": "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(231, 219, 239, 0.75) 100%)",
        "purple-dark-card": "linear-gradient(145deg, #49225B 0%, #3A1849 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px -4px rgba(223, 183, 108, 0.4)",
        "gold-sm": "0 2px 10px -2px rgba(198, 146, 60, 0.3)",
        "purple-subtle": "0 10px 30px -10px rgba(73, 34, 91, 0.15)",
        "purple-elevated": "0 20px 45px -12px rgba(73, 34, 91, 0.22)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
