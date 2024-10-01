/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainViolet: '#7000FF',
      },
      screens: {
        'md-lg': '900px',
      },
    },
  },
  plugins: [],
}
