/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#B6252A', // Telkom University Red
          600: '#ED1E28', // Telkom University Bright Red
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
        },
        telkom: {
          red: '#B6252A',
          brightRed: '#ED1E28',
          gray: '#5a677d',
          lightGray: '#f0f2f5',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(182, 37, 42, 0.07), 0 10px 20px -2px rgba(182, 37, 42, 0.04)',
        'medium': '0 4px 25px -5px rgba(182, 37, 42, 0.1), 0 10px 10px -5px rgba(182, 37, 42, 0.04)',
        'large': '0 10px 40px -10px rgba(182, 37, 42, 0.15), 0 20px 25px -5px rgba(182, 37, 42, 0.1)',
        'telkom': '0 10px 30px 0 rgba(182, 37, 42, 0.1)',
      },
    },
  },
  plugins: [],
};