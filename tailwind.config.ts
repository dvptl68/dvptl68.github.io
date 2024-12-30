import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'background-light': '#cbcfd7',
        'txt-light': '#040316',
        'blue-light': '#105e9e',
        'purple-light': '#6a4c9a',
        'red-light': '#b6281b',
        'green-light': '#5b863c',
        'background-dark': '#282c34',
        'txt-dark': '#eae9fc',
        'blue-dark': '#61afef',
        'purple-dark': '#8365b3',
        'red-dark': '#e45649',
        'green-dark': '#98c379',
      },
    },
  },
  plugins: [],
};

export default config;
