import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      preto: "#444444",
      cinza: {
        500: "#737373",
        300: "#B3B3B3",
        100: "#F2F2F2",
      },

      verde: {
        800: "#137162",
        500: "#199D8E",
        200: "#D1ECE9",
      },

      vermelho: {
        800: "#712e2b",
        500: "#FF5454",
        300: "#fb9189",
        200: "#FFD2D2",
      },
    },
    extends: {},
  },
} satisfies Config;
