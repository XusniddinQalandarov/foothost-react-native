/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        background: {
          default: '#F5F5F5',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
        gray: {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontSize: {
        'xs': 12,
        'sm': 14,
        'base': 16,
        'lg': 18,
        'xl': 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
      },
      spacing: {
        'xs': 4,
        'sm': 8,
        'md': 16,
        'lg': 24,
        'xl': 32,
        '2xl': 48,
        '3xl': 64,
      },
    },
  },
  plugins: [],
} 