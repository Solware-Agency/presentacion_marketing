import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				// Tamaños personalizados para presentaciones
				'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 64px
				'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 48px
				'heading': ['2.5rem', { lineHeight: '1.3' }], // 40px
				'heading-sm': ['2rem', { lineHeight: '1.4' }], // 32px
				'subheading': ['1.5rem', { lineHeight: '1.5' }], // 24px
				'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
				'body': ['1rem', { lineHeight: '1.6' }], // 16px
				'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
				'caption': ['0.75rem', { lineHeight: '1.4' }], // 12px
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'solware-gradient': 'linear-gradient(to bottom right, #271944, #34182f, #1f2937)',
				'solware-gradient-purple': 'linear-gradient(to bottom right, #1e0c2f, #2a1350, #4b1c7a)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				solware: {
					// Fondos
					surface: '#111827',
					subsurface: '#1f2937',
					'dark-purple': '#271944',
					'deep-purple': '#34182f',
					// Texto
					difuminado: '#dbeafe',
					// Botones y acciones
					primary: '#3b82f6',
					'primary-hover': '#2563eb',
					// Iconos y acentos
					amarillo: '#ecb424',
					azul: '#5d9ff0',
					verde: '#3aa465',
					fucsia: '#ce609c',
					morado: '#bc81f8',
					// Likert
					agree: '#3aa465',
					disagree: '#bc81f8',
					'disagree-strong': '#ce609c',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'slide-out-right': {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateX(100%)',
						opacity: '0',
					},
				},
				'slide-out-left': {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
				},
				'fade-in-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'fade-out-scale': {
					'0%': {
						opacity: '1',
						transform: 'scale(1)',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1.05)',
					},
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(8px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-out-right': 'slide-out-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-out-left': 'slide-out-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in-scale': 'fade-in-scale 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-out-scale': 'fade-out-scale 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-up': 'fade-up 0.4s ease-out',
			},
			transitionTimingFunction: {
				'slide-ease': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'spring-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-ease': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			transitionDuration: {
				slide: '500ms',
				'slide-fast': '300ms',
				'slide-slow': '700ms',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config;
