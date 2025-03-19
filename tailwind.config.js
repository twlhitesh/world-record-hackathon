/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        'meteor': 'meteor 5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'spotlight': 'spotlight 2s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'float': 'float 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1.1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};