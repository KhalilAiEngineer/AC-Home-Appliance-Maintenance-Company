import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071A2B',
          50: '#E8ECF0',
          100: '#C5D0DB',
          200: '#8FA1B6',
          300: '#5A7292',
          400: '#2E4A65',
          500: '#071A2B',
          600: '#061726',
          700: '#05121E',
          800: '#030D16',
          900: '#02080E',
        },
        blue: {
          DEFAULT: '#087EA4',
          50: '#E6F4F8',
          100: '#B3DFED',
          200: '#66BFDB',
          300: '#1A9FC9',
          400: '#118DB8',
          500: '#087EA4',
          600: '#076F91',
          700: '#055A75',
          800: '#044659',
          900: '#02313D',
        },
        cyan: {
          DEFAULT: '#00AEEF',
          50: '#E6F7FD',
          100: '#B3E9F8',
          200: '#66D3F1',
          300: '#1ABDEA',
          400: '#08B1E7',
          500: '#00AEEF',
          600: '#009CD9',
          700: '#0083B8',
          800: '#006A96',
          900: '#005175',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config