/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'a4': '297mm'
      },
      width: {
        'a4': '210mm'
      },
      colors: {
        'link': '#1a73e8',
      }
    },
  },
  plugins: [],
}

