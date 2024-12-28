// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerimage: "url('/public/newlogin.jpg')",
        sigupimage: "url('/public/busback.jpg')",
      },
    },
  },
  plugins: [],
};
