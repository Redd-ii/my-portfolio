
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#FCD34D',
        darkBg: '#1E1E1E',
        darkText: '#E5E7EB',
        lightBg: '#F3F4F6',
        lightText: '#111827',
      },
    },
  },
  plugins: [],
};
export default config;
