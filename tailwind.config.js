/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Poppins", "sans-serif"],
        'comic-sans': ['Comic Sans MS', 'cursive'],
        'museo-sans': ['Museo Sans', 'sans-serif'],
        'times-new-roman': ['Times New Roman', 'serif'],
      },
      colors: {
        'font-color': 'var(--font-color)',
        'bg-color': 'var(--bg-color)',
        'bg-grad': 'var(--bg-grad)',


      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
