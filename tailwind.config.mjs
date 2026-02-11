/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          raised: '#141414',
          overlay: '#1e1e1e',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.16)',
        },
        accent: {
          DEFAULT: '#FF6B00',
          light: '#FF8A33',
          bright: '#FFA54F',
          muted: 'rgba(255, 107, 0, 0.10)',
        },
      },
    },
  },
  plugins: [],
};
