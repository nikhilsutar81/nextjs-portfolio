// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',  
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in',
          'slide-up': 'slideUp 0.6s ease-out',
          'slide-down': 'slideDown 0.6s ease-out',
          'slide-left': 'slideLeft 0.6s ease-out',
          'slide-right': 'slideRight 0.6s ease-out',
          'scale-in': 'scaleIn 0.5s ease-out',
          'bounce-slow': 'bounce 2s infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideLeft: {
            '0%': { transform: 'translateX(20px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideRight: {
            '0%': { transform: 'translateX(-20px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  };
  