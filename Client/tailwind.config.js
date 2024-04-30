/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "foreground-primary": "#FFFCF2",
      "foreground-secondary":"#CCC5B9",
      "background-secondary": "#403D39",
      "background-primary": "#252422",
      "Accent":"#EB5E28",
      "urgent":"#7f1d1d",
      "important":"#365314",
    },
    extend: {

    },
  },
  plugins: [
    require("daisyui")
  ],
}

