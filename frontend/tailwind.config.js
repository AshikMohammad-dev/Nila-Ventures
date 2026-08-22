/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C084FC',
          DEFAULT: '#7C3AED',
          dark: '#581C87',
        },
        accent: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
          violet: '#8B5CF6',
        },
        dark: {
          bg: '#060608',
          surface: '#0B0A10',
          card: '#100E1A',
          cardHover: '#161324',
          light: '#1B172E',
          border: 'rgba(168, 85, 247, 0.15)',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.25), transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(124, 58, 237, 0.04) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glow-radial': 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(124, 58, 237, 0.25)',
        'glow': '0 0 25px rgba(124, 58, 237, 0.35)',
        'glow-lg': '0 0 50px rgba(168, 85, 247, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'glass': '16px',
        'glass-lg': '24px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
