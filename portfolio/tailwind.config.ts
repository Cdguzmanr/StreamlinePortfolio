import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 15s ease infinite',
        spinSlow: 'spinSlow 20s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Main Color Palette
        'night':'#151316',  
        'raisin-black':'#2D2928', // gradient of night to raisin-black used in navbar and footer
        'bone': '#F9F6EE', // Background color of all views
        // Secondary colors
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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
