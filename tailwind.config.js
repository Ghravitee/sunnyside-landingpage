/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Soft-Red": "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        "Dark-Desaturated-Cyan": "hsl(167, 40%, 24%)",
        "Dark-Blue": "hsl(198, 62%, 26%)",
        "Dark-Moderate-Cyan": "hsl(168, 34%, 41%)",

        "Very-Dark-Desaturated-Blue": "hsl(212, 27%, 19%)",
        "Very-Dark-Grayish-Blue": "hsl(213, 9%, 39%)",
        "Dark-Grayish-Blue": "hsl(232, 10%, 55%)",
        "Grayish-Blue": "hsl(210, 4%, 67%)",
        "White": "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        'hero-background-desktop': "url('/src/images/desktop/image-header.jpg')",
        'hero-background-mobile': "url('/src/images/mobile/image-header.jpg')",
        'graphic-design-mobile-background': "url('/src/images/mobile/image-graphic-design.jpg')",
        'graphic-design-desktop-background': "url('/src/images/desktop/image-graphic-design.jpg')",
        'photography-mobile-background': "url('/src/images/mobile/image-photography.jpg')",
        'photography-desktop-background': "url('/src/images/desktop/image-photography.jpg')",
      }
    },
  },
  plugins: [],
};
