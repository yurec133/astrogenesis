import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-2xl": { max: "1536px" },
        "max-lg": { max: "1023px" },
      },
      fontSize: {
        "7xl": "5rem", //80px
        "custom-6xl": [
          "4.125rem",
          {
            lineHeight: "1",
          },
        ], //66px
        "6xl": [
          "3.5rem",
          {
            lineHeight: "1.2",
          },
        ], //56px
        "5xl": [
          "2.875rem",
          {
            lineHeight: "1.2",
          },
        ], //46px
        "4xl": "2.625rem", //42px
        "custom-3xl": [
          "2.5rem",
          {
            lineHeight: "1.2",
          },
        ], //40px
        "custom-3x": [
          "2.375rem",
          {
            lineHeight: "1.2",
          },
        ], //38px
        "3xl": [
          "2rem",
          {
            lineHeight: "1.2",
          },
        ], //32px
        "2xl": [
          "1.75rem",
          {
            lineHeight: "1.2",
          },
        ], //28px
        xl: [
          "1.625rem",
          {
            lineHeight: "1.2",
          },
        ], //26px
        lg: "1.5rem", //24px
        "custom-xl": [
          "1.375rem", //22px
          {
            lineHeight: "1.2",
          },
        ],
        "custom-lg": "1.25rem", //20px
        base: "1.125rem", //18px
        tiny: [
          "1rem", //16px
          {
            lineHeight: "1.32",
          },
        ],
        sm: "0.875rem", //14px
      },
      fontFamily: {
        exo2: ["var(--font-exo2)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.75rem", //28px
        "3xl": "2.375rem", //38px
      },
      backgroundImage: {
        "light-purple-gradient":
          "linear-gradient(180deg, rgba(42, 27, 114, 0.6) 0%, rgba(81, 39, 129, 0.6) 37.85%)",
        "soft-purple-gradient":
          "linear-gradient(270deg, rgba(83, 25, 110, 0.32) 0%, rgba(159, 48, 212, 0.064) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          300: "#FBDD4D",
        },
        blue: {
          400: "#5AD5F5",
        },
        red: {
          400: "#ED6728",
        },
        purple: {
          300: "#D9ADED",
          900: "#331441",
        },
        indigo: {
          900: "#1A1145",
        },
        gray: {
          200: "#ddd",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".container": {
          maxWidth: "1464px",
        },
      });
    },
    plugin(function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".border-soft-purple-after": {
          position: "absolute",
          inset: "0",
          zIndex: "-1",
          border: "2px solid transparent",
          content: "''",
          WebkitMask:
            "linear-gradient(#ffffff 0 0) content-box, linear-gradient(#ffffff 0 0)",
          mask: "linear-gradient(#ffffff 0 0) content-box, linear-gradient(#ffffff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          background:
            "linear-gradient(180deg, #3e2592 0%, rgba(96, 65, 255, 0.14) 62.74%) border-box",
        },
        ".border-soft-light-after": {
          position: "absolute",
          inset: "0",
          zIndex: "-1",
          border: "2px solid transparent",
          content: "''",
          WebkitMask:
            "linear-gradient(#ffffff 0 0) content-box, linear-gradient(#ffffff 0 0)",
          mask: "linear-gradient(#ffffff 0 0) content-box, linear-gradient(#ffffff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          background:
            "linear-gradient(180deg, rgba(96, 65, 255, 0.5) 0%, rgba(96, 65, 255, 0.15) 83.49%) border-box",
        },
      });
    }),
  ],
} satisfies Config;
