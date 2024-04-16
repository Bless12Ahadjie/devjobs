/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      'violet': '#5964E0',
      'lightvioler': ' #939BF4',
      'verydarkblack': '#19202D',
      'midnight': '#121721',
      'white': '#FFFFFF',
      'lightgray': '#F4F6F8',
      'gray': '#9DAEC2',
      'darkgray': '#6E8098'
    },
    fontSize:{
      'xl':'28px',
      'lg':'24px',
      'md':'20px',
      'sm':'16px',
      'xsm':'14px',
    },
  lineHeight: {
      'h1':'34px',
      'h2':'29px',
      'body':'26px',
      'h3':'24px',
      'h4':'18px',
  },



    extend: {

    },
  },
  plugins: [],
}