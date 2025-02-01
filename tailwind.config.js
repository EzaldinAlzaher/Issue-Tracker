/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB4",
        secondary: "#F8F9F9",
        tertiary: "#393D46"
      }
    },
  },
  plugins: [  ],
  corePlugins: {
    preflight: false,
  }
}

