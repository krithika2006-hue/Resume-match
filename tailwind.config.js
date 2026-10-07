/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          hover: '#1e40af',
          light: '#DBEAFE',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        deepBlue: '#0B1F5C',
        lightBlue: '#DBEAFE',
        darkText: '#0F172A',
        mutedText: '#64748B',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(11, 31, 92, 0.06), 0 2px 6px -1px rgba(11, 31, 92, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(11, 31, 92, 0.1), 0 4px 10px -2px rgba(11, 31, 92, 0.05)',
      }
    },
  },
  plugins: [],
}
