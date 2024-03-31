import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--background-primary)",
        header: "var(--background-header)",
        footer: "var(--background-footer)",
      },
      colors: {
        primary: "var(--text-color)",
      },
      fontSize: {
        primary: "var(--text-size-primary)",
        paragraph: "var(--text-size-paragraph)",
      },
      maxWidth: {
        custom: "var(--max-width)",
      },
    },
  },
  plugins: [],
};
export default config;
