/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#e9c176",
        "surface": "#121314",
        "on-background": "#e3e2e3",
        "surface-container": "#1f2021",
        "outline-variant": "#4e4639",
        // Tambahkan warna lain dari config HTML kamu di sini
      },
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    typography,
  ],
}