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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
