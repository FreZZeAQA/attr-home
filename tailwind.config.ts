import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      colors: {
        primary: '#BD1E2E',
        darkGray: '#556670',
        lightGray: '#C3D4DC',
        beige: {
          50: '#FCF9F5',
          100: '#F9F3EC',
          200: '#ECDAC5',
          300: '#E0C19F',
          400: '#D3A878',
          500: '#C78F51',
          600: '#AE7638',
          700: '#875B2C',
          800: '#60411F',
          900: '#3A2713',
          950: '#130D06',
        },
        gray: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#101010',
        },
      },
      fontFamily: {
        'openSans': ['"Open Sans"', 'sans-serif'],
        'cormorantGaramond': ['"Cormorant Garamond"', 'sans-serif'],
      },
    },
  },

  plugins: [],
} satisfies Config;
