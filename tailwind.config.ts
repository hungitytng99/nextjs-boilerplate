import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Helvetica, Arial, sans-serif',
      },
      colors: {
        primary: '#ee4d2d',
        primaryBg: '#fef6f5',
        primaryGradient: 'linear-gradient(#ee4d2d,#ff7337);',
        secondaryBlue: '#0046ab',
        secondaryYellow: '#eda500',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
