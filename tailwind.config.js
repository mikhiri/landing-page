/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(35 50% 93%)',
        foreground: 'hsl(25 35% 30%)',
        card: 'hsl(35 60% 98%)',
        'card-foreground': 'hsl(25 35% 30%)',
        primary: 'hsl(25 100% 63%)',
        'primary-foreground': 'hsl(0 0% 100%)',
        secondary: 'hsl(95 35% 60%)',
        'secondary-foreground': 'hsl(0 0% 100%)',
        muted: 'hsl(35 40% 88%)',
        'muted-foreground': 'hsl(25 20% 45%)',
        accent: 'hsl(260 50% 65%)',
        'accent-foreground': 'hsl(0 0% 100%)',
        border: 'hsl(35 30% 85%)',
      },
      borderRadius: {
        DEFAULT: '1.5rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px hsl(25 100% 63% / 0.2)',
        'card': '0 8px 30px -8px hsl(25 80% 50% / 0.15)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, hsl(35 60% 95% / 0.8), hsl(25 100% 90% / 0.3))',
        'gradient-card': 'linear-gradient(135deg, hsl(35 55% 96% / 0.95), hsl(95 35% 85% / 0.2))',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
