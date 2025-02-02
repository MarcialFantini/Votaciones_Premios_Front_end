import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      theme: {
        colors: {
          'brand-light': '#F7F1F9',
          'brand-dark': '#000000',
          'brand-yellow': '#D3F527',
          'brand-orange': '#FF930F',
          'brand-purple': '#4A28F2',
          'brand-lila': '#A998F8'
        }
      }
    }
  },
  plugins: []
}

export default config
