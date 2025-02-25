import type { Config } from 'tailwindcss';
import headlessui from '@headlessui/tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class', '.atcb-dark'],
  theme: {
    screens: {
      xs: '430px',
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1600px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        black: '#111',
        primary: '#9755ff',
        'primary-light': '#cbaaff',
        'primary-dark': '#7644c6',
        'primary-darker': '#4e3872',
        'primary-darkest': '#28182d',
        secondary: '#ffa255',
        'secondary-light': '#ffd0aa',
        'secondary-dark': '#fc8f29',
        'brand-blue': '#539eff',
        'brand-blue-light': '#a9ceff',
        'brand-blue-dark': '#336db9',
        background: '#f1eff8',
        'background-dark': '#1b1d21',
        text: '#333',
        'text-dark': '#e6e2ed',
        npm: '#cb3837',
        angular: '#C3002F',
        astro: '#0F172A',
        react: '#00d8ff',
        svelte: '#FF3E19',
        vue: '#42b883',
        nuxt: '#08C678',
        wordpress: '#21759b',
        javascript: '#f7df1e',
      },
      dropShadow: {
        'dark-sm': '0 0 1px rgb(0 0 0 / 0.1)',
        dark: ['0 1px 3px rgb(0 0 0 / 0.1)', '0 0 1px rgb(0 0 0 / 0.15)'],
        'dark-md': ['1px 2px 6px rgb(0 0 0 / 0.2)', '0 0 4px rgb(0 0 0 / 0.3)'],
        'dark-lg': ['2px 3px 8px rgb(0 0 0 / 0.2)', '0 0 4px rgb(0 0 0 / 0.4)'],
        'light-sm': '0 1px 1px rgb(255 255 255 / 0.05)',
        light: ['0 1px 2px rgb(255 255 255 / 0.1)', '0 1px 1px rgb(255 255 255 / 0.06)'],
        'light-md': ['0 3px 3px rgb(255 255 255 / 0.07)', '0 1px 5px rgb(255 255 255 / 0.06)'],
        'light-lg': ['0 8px 8px rgb(255 255 255 / 0.04)', '0 3px 3px rgb(255 255 255 / 0.1)'],
        'light-xl': ['0 8px 25px rgb(255 255 255 / 0.1)', '0 3px 8px rgb(255 255 255 / 0.15)'],
      },
    },
  },
  plugins: [headlessui({ prefix: 'ui' })],
} satisfies Config;
