/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "url('/images/Backgroundimg.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "san serif"],
      },
    },
  },
  plugins: [],
};
