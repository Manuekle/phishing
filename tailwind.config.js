/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shad: {
          orange: {
            100: '#FFC837',
            200: '#FF8008'
          },
          purple: {
            100: '#8227FE',
            200: '#D676EA'
          },
          yellow: {
            100: '#fff601'
          }
        }
      }
    }
  }
};
