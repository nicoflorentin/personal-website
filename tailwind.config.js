/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#93C572",
				secondary: '#AE8FDB',
				bone: '#ffffff',
				text: '1C1C1C',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				rubik: [
					'rubik-mono-one',
					'sans-serif'
				],
				consolas: [
					'consolas',
					'sans-serif'
				],
				inter: [
					'inter',
					'sans-serif'
				],
				impact: [
					'impact',
					'sans-serif'
				]
			},
			transitionDuration: {
				fast: '200ms'
			},
			animation: {
				["infinite-slider"]: 'infiniteSlider 10s linear infinite',
				first: 'moveVertical 60s ease infinite',
				second: 'moveInCircle 40s reverse infinite',
				third: 'moveInCircle 80s linear infinite',
				fourth: 'moveHorizontal 80s ease infinite',
				fifth: 'moveInCircle 40s ease infinite'
			},
			keyframes: {
				infiniteSlider: {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(calc(-250px * 5))'
					}
				},
				moveHorizontal: {
					'0%': {
						transform: 'translateX(-50%) translateY(-10%)'
					},
					'50%': {
						transform: 'translateX(50%) translateY(10%)'
					},
					'100%': {
						transform: 'translateX(-50%) translateY(-10%)'
					}
				},
				moveInCircle: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(180deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				moveVertical: {
					'0%': {
						transform: 'translateY(-50%)'
					},
					'50%': {
						transform: 'translateY(50%)'
					},
					'100%': {
						transform: 'translateY(-50%)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *")
			addVariant("child-hover", "& > *:hover")
		},
		require("tailwindcss-animate")
	],
}
