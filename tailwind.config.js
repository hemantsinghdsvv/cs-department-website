/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iitbblue: "#003366",       // dark IITB blue
        iitblightblue: "#336699",  // lighter IITB blue
        iitbgray: "#f5f5f5",       // light gray
      },
      fontFamily: {
        heading: ["Georgia", "Times New Roman", "Times", "serif"],
        body: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
