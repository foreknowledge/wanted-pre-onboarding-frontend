/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
