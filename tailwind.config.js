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
        primary: {
          200: '#97D5F0',
          900: '#0C455E',
        },
        secondary: {
          600: '#CF7B41',
        },
        neutral: {
          800: '#494F59',
        },
      },
      colors: {
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
