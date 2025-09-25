/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium AI-focused theme color system
        primary: {
          DEFAULT: '#0891B2', // Professional blue
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0891B2',
          600: '#0E7490',
          700: '#155E75',
          800: '#164E63',
          900: '#0C4A6E',
          foreground: '#FFFFFF',
        },
        // AI accent colors
        neural: {
          DEFAULT: '#6366F1',
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        tech: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        secondary: {
          DEFAULT: '#64748B',
          50: '#F8FAFC',
          100: '#F1F5F9',
          500: '#64748B',
          foreground: '#FFFFFF',
        },
        // Clean light backgrounds
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFC', // Very light gray
          muted: '#F1F5F9', // Light gray sections
        },
        // Premium text colors
        foreground: {
          DEFAULT: '#0F172A', // Deep navy for headlines
          secondary: '#1E293B', // Dark gray for subheadings
          muted: '#64748B', // Medium gray for body text
          light: '#94A3B8', // Light gray for subtle text
        },
        // Card and UI elements
        card: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFC',
          border: '#E2E8F0',
        },
        // Borders and dividers
        border: {
          DEFAULT: '#E2E8F0', // Light border
          secondary: '#CBD5E1', // Slightly darker border
          accent: '#0891B2', // Blue accent border
        },
        // Status colors
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
        // Subtle accent
        accent: {
          DEFAULT: '#0891B2',
          light: '#F0F9FF',
          muted: '#E0F2FE',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgb(0 0 0 / 0.05)',
        'medium': '0 4px 16px 0 rgb(0 0 0 / 0.08)',
        'large': '0 8px 32px 0 rgb(0 0 0 / 0.12)',
        'colored': '0 4px 16px 0 rgb(8 145 178 / 0.15)',
        'neural': '0 0 20px 0 rgb(99 102 241 / 0.3)',
        'tech': '0 0 20px 0 rgb(16 185 129 / 0.3)',
        'premium': '0 8px 32px 0 rgb(8 145 178 / 0.08), 0 2px 8px 0 rgb(0 0 0 / 0.04)',
      },
      backgroundImage: {
        'neural-pattern': 'radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
        'tech-gradient': 'linear-gradient(135deg, rgba(8, 145, 178, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
        'data-flow': 'linear-gradient(90deg, transparent 0%, rgba(8, 145, 178, 0.2) 50%, transparent 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-soft': 'pulseSoft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 4s ease-in-out infinite',
        'data-flow': 'dataFlow 8s linear infinite',
        'connection-glow': 'connectionGlow 3s ease-in-out infinite alternate',
        'ai-processing': 'aiProcessing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        neuralPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        connectionGlow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.7' },
        },
        aiProcessing: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(180deg) scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}