import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Main Color Palette
        'night':'#151316',
        'raisin-black':'#2D2928',
        'bone': '#F9F6EE',
        'ucla-blue': '#2274A5',
        'poppy':'#DB2B39',
        'orange':'#F3A712',
        // Backup Color Palette (I didn't like them too much)
        'rich-black': '#0d1b2a',
        'oxford-blue': '#1b263b',
        'yinmn-blue': '#415a77', 
        'silver-lake-blue': '#778da9',
        'platinum': '#e0e1dd',

      },
    },
  },
  plugins: [],
} satisfies Config;
