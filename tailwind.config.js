/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
        spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors : {
        black100 : "#1A1624",
        black80: "#0C081F",
        purple100 : "#706EEC",
        purple90: "#5654E4",
        purple80: "#5957E4",
        white30: "#F3F3F3",
        green100 : "#4DEB9F",
        blue100: "#4C9DD9"
      },
      strokeWidth: {
        '2': '2px',
      }
    },

  },
  // plugins: [
  //   require('tailwindcss-text-stroke')(),
  // ],
  plugins: []
}

