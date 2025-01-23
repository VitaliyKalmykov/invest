/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Включає всі ваші файли React
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '480px'},  // Apply for screen sizes from 0px to 480px
      'md': {'min': '481px', 'max': '768px'},  // Apply for screen sizes from 481px to 768px
      'xl': {'min': "769px"}, // Apply for screen sizes from 1280px and up
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',  // Default padding for all screen sizes
        'sm': '1rem',     // Smaller padding for small screens
        'md': '2rem',     // Medium padding for medium screens
        'xl': '4rem',     // Larger padding for larger screens
      },
      screens: {
        'sm': '100%',     // Full width for small screens
        'md': '100%',     // Full width for medium screens
        'xl': '1280px',   // Fixed width for large screens
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};