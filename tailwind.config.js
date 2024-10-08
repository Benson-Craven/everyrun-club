/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        everyRunBlue: '#C5F6FF',
        everyRunOrange: '#FF893A',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
