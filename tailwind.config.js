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
        'smooth-slide': 'smoothSlide 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
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
            transform: 'scale(1) translateZ(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1.1) translateZ(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateZ(0)' },
          '50%': { transform: 'translateY(-8px) translateZ(0)' },
        },
        smoothSlide: {
          '0%': { transform: 'translateX(-100%) translateZ(0)', opacity: 0 },
          '100%': { transform: 'translateX(0) translateZ(0)', opacity: 1 },
        },
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};