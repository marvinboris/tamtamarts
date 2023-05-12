/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Open Sans", ...fontFamily.sans],
      display: ["Ubuntu", ...fontFamily.sans],
    },
  },
};
export const plugins = [];
