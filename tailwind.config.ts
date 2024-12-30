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
        'background-light': '#f0f0f4',
        'txt-light': '#040316',
        'primary-light': '#105e9e',
        'secondary-light': '#8365b3',
        'accent-light': '#b6281b',
        'background-dark': '#0b0b0f',
        'txt-dark': '#eae9fc',
        'primary-dark': '#61afef',
        'secondary-dark': '#6a4c9a',
        'accent-dark': '#e45649',
      },
    },
  },
  plugins: [],
};

export default config;
