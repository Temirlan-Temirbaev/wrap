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
    },
  },
  plugins: [],
}

