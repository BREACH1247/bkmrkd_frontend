module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      }
    },
  },
  variants: {
    extend: {
      zIndex: ['hover', 'active'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}