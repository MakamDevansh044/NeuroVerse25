export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        secondary: '#535bf2',
        dark: '#13151a',
        light: '#ffffff',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 10px #646cff, 0 0 20px #646cff, 0 0 30px #646cff' },
          '100%': { 'text-shadow': '0 0 20px #535bf2, 0 0 30px #535bf2, 0 0 40px #535bf2' },
        },
      },
    },
  },
  plugins: [],
}