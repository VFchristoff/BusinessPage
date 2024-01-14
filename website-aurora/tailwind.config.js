// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      underlineOffset: {
        '2': '2px',
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
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
