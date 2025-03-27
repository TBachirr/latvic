/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'latvic': {
          'red': '#FF0000',
          'blue': '#4A5568',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

