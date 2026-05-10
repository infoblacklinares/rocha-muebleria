import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Tokens de marca — editar aquí cambia toda la app
        bg: "#F8F4ED",
        "bg-2": "#F2EBDD",
        paper: "#FFFFFF",
        ink: "#1A1410",
        "ink-soft": "#6E5D4D",
        line: "#E8DFCD",
        accent: {
          DEFAULT: "#E87B3E",
          deep: "#C5602B",
          light: "#F5A06D"
        },
        sage: {
          DEFAULT: "#D8DECA",
          deep: "#A8B68F"
        },
        copper: "#B87A4F",
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#1ebe5b"
        }
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Times New Roman", "serif"],
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "28px"
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em"
      },
      maxWidth: {
        site: "1400px"
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        ping: {
          "75%, 100%": { transform: "scale(2.4)", opacity: "0" }
        },
        floatProduct: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        floatCircle: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -2%) scale(1.02)" }
        },
        scrollLine: {
          "0%, 100%": { transform: "scaleY(0.3)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" }
        }
      },
      animation: {
        rise: "rise 1s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        marquee: "marquee 32s linear infinite",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float-product": "floatProduct 8s ease-in-out infinite",
        "float-circle": "floatCircle 12s ease-in-out infinite",
        "scroll-line": "scrollLine 2s infinite ease-in-out"
      }
    }
  },
  plugins: []
};

export default config;
