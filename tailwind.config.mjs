/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Oswald', 'sans-serif'],
        highlight: ['Playfair Display', 'serif'],
      },
      colors: {
        tw: {
          black: '#000000',
          green: '#006141',
          yellow: '#FFE01D',
          purple: '#3B0D6E',
          white: '#FFFFFF',
          'gray-100': '#F5F5F0',
          'gray-200': '#E8E8E0',
          'gray-400': '#A0A09E',
          'gray-600': '#5C5C5A',
          'gray-900': '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};
