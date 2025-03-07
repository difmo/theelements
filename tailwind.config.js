/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'newprimary': '#1da4df',
        'primarybg': '#E8F6FC',
        primary: {
          200: '#97D5F0',
          900: '#0C455E',
          500: '#1da4df'
        },
        secondary: {
          600: '#e48747',
        },
        neutral: {
          800: '#494F59',
        },  
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
