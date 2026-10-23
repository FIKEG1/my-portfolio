/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f8fafc',
          raised: '#ffffff',
          ink: '#0f172a',
          mute: '#475569',
          line: '#e2e8f0',
        },
        night: {
          DEFAULT: '#090b12',
          raised: '#11141d',
          ink: '#f8fafc',
          mute: '#a1a1aa',
          line: '#292d39',
        },
        copper: {
          DEFAULT: 'var(--accent)',
          bright: 'var(--accent-bright)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
