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
        linkp: {
          blue: "#1677F2",
          "blue-dark": "#0D5CC8",
          "blue-light": "#EBF4FF",
          cyan: "#25D8DF",
          "cyan-light": "#E6FCFD",
          navy: "#0B1736",
          muted: "#64748B",
          bg: "#F8FAFF",
          card: "#FFFFFF",
          emerald: "#10B981",
          amber: "#F59E0B",
          purple: "#8B5CF6",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(22, 119, 242, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        glow: "0 0 50px -10px rgba(37, 216, 223, 0.35)",
        "blue-glow": "0 12px 36px -8px rgba(22, 119, 242, 0.4)",
        card: "0 20px 40px -15px rgba(11, 23, 54, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
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
