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
          raised: '#101010',
          overlay: '#161616',
          code: '#0d0d0d',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 107, 0, 0.35)',
        },
        accent: {
          DEFAULT: '#FF6B00',
          light: '#FF8A33',
          bright: '#FFA54F',
          muted: 'rgba(255, 107, 0, 0.10)',
        },
        // Terminal / syntax-highlight palette (used sparingly in code motifs)
        code: {
          str: '#7ec699',   // strings
          key: '#6cb6ff',   // keywords
          fn: '#e5c07b',    // functions
          com: '#5c6370',   // comments
          punc: '#7d7d7d',  // punctuation
        },
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(255, 107, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
