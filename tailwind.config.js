/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        5: '5 5 0%',
      },
    },
  },
  plugins: [],
}
