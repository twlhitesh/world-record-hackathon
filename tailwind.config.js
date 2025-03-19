/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        'meteor': 'meteor 5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'spotlight': 'spotlight 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'float': 'float 7s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'bounceSoft 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-soft': 'pulseSoft 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
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
            transform: 'scale(1) translateY(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1.15) translateY(-8%)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.97)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.985)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};