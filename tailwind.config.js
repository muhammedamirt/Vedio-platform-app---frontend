/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-russian': {
          '50': '#eceeff',
          '100': '#bdbeff',
          '200': '#7b7bff',
          '300': '#3331ff',
          '400': '#0007ff',
          '500': '#000eed',
          '600': '#0006bf',
          '700': '#000397',
          '800': '#000077',
          '900': '#00000a',
        },
        'diesel': {
          '50': '#ffecee',
          '100': '#ffbdbe',
          '200': '#ff7b7b',
          '300': '#ff3331',
          '400': '#ff0007',
          '500': '#ed000e',
          '600': '#bf0006',
          '700': '#970003',
          '800': '#770000',
          '900': '#140000',
        },
      }
    },
  },
  plugins: [],
}