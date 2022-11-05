/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'amsterdam': '#307be2',
      'berlin': '#026881',
      'buenos-aires': '#ae172c',
      'barcelona': '#f1e4ad',
      'copenhagen': '#9bb0ac',
      'detroit': '#e8032c',
      'frankfurt': '#46238a',
      'ibiza': '#00c0ce',
      'istanbul': '#df8b00',
      'la': '#ff4750',
      'lisbon': '#eb0032',
      'london': '#00883c',
      'miami': '#cb98e4',
      'milan': '#ffb200',
      'nyc': '#00305c',
      'paris': '#013ca8',
      'seoul': '#af0284',
      'stockholm': '#001423',
      'tokyo': '#e3e77c',
      'vienna': '#ffffff',
      'warsaw': '#00b10b',
      'zurich': '#ded9d6',
    },
    fontFamily: {
      'display' : ['New Title', 'serif'],
      'body' : ['Amulya', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}
