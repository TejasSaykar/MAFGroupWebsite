/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        // Add your custom colors with transparency
        transparentBlack: 'rgba(0, 0, 0, 0.5)',
        transparentWhite: 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  variants:{},
  plugins: [],
}

