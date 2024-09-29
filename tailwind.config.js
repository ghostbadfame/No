/** @type {import('tailwindcss').Config} */
export default {
  content: ["./entrypoints/**/*.{js,jsx,ts,tsx}"],
    corePlugins: {
        preflight: false,
      },
      important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit"
};