/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#813aaa",
        
"secondary": "#45f78c",
        
"accent": "#8e7af4",
        
"neutral": "#1B2331",
        
"base-100": "#FAFAFA",
        
"info": "#9FE4F9",
        
"success": "#5BECD6",
        
"warning": "#EBBD33",
        
"error": "#E86F64",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

