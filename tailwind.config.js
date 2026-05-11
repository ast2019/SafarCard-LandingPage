/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Vazirmatn', 'sans-serif'] },
      colors: {
        brand: {
          red: '#ea4037',
          dark: '#0f172a',
          light: '#f8fafc',
        }
      }
    },
  },
  plugins: [],
}
