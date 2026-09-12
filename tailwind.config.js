/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0c0c0c',
        ink: '#e8e4de',
        muted: 'rgba(232, 228, 222, 0.45)',
      },
      fontFamily: {
        kanit: ['"Kanit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee var(--marquee-duration, 42s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 42s) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 3))' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(calc(-100% / 3))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
