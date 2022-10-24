module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'NanumSquareNeo': ['NanumSquareNeo'],
      'NanumSquare': ['NanumSquare'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
}