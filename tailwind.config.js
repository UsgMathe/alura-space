/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gandhiSansBold': ['GandhiSansBold'],
        'gandhiSansRegular': ['GandhiSansRegular'],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'text': '#d9d9d9',
      'darkBlue': '#041833',
      'lightBlue': '#154580',
      'footerBlue': '#04244f',
      'pink': '#c98cf1',
      'purple': '#7b78e5',
      'lightGray': '#9d9d9d',
      'tag': 'rgba(148, 163, 184, 0.3)',
    }
  },
  plugins: [],
}