import type { Config } from 'tailwindcss'

const config: Config = {
  mode: "jit",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    colors:{
      dark : {
        'background' : '#232946',
        'secondary' : '#3e4878',
        'button' : '#eebbc3',
        'text' : '#b8c1ec',
      },
      light : {
        'background' : '#f9f4ef',
        'secondary' : '#fffffe',
        'button' : '#8c7851',
        'text' : '#716040',

      },  
    },
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [],
}
export default config
