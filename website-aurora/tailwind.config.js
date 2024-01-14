// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%%': {
            transform: 'translateY(-20%)',
          },
          '50%': {
            transform: 'translateY(20%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        reverseShimmer: {
          '0%': {
            transform: 'translateY(20%)',
          },
          '50%': {
            transform: 'translateY(-20%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'bounce-custom': {
          '0%, 100%': {
            transform: 'translateY(5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'bounce-custom-2': {
          '0%, 100%': {
            transform: 'translateY(50%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'bounce-custom': 'bounce-custom 5s infinite',
        'bounce-custom-2': 'bounce-custom-2 1s infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
        reverseShimmer: 'shimmer 2s ease-in-out infinite',
      },
      backgroundColor: {
        'custom-bg-color': '#201e2b',
        'custom-alt-color': '#292438',
        purple: {
          500: '#8a63e5',
        },
        indigo: {
          500: '#6366f1',
        },
      },
      borderColor: {
        'custom-border-color': '#201e2b',
        'alt-border-color': '#292438',
      },
      textColor: {
        'custom-color': '#242235',
      },
    },
  },
};
