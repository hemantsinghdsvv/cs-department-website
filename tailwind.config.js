/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // if using Next.js app directory
  ],
  theme: {
    extend: {
      colors: {
        iitb: {
          blue: "#003366",
          lightblue: "#336699",
          gray: "#f5f5f5",
        },
      },
      fontFamily: {
        heading: ["Georgia", "Times New Roman", "Times", "serif"],
        body: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
