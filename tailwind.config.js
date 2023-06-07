/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        thomos: {
          primary: '#00a6fb',
          secondary: '#4b5563',
          accent: '#6366f1',
          neutral: '#2a323c',
          'base-100': '#fff',
          info: '#93c5fd',
          success: '#36d399',
          warning: '#fde047',
          error: '#FC2947',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
