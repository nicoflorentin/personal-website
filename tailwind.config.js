/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#93C572",
				secondary: '#AE8FDB',
				bone: '#DAD7CB',
				text: '1C1C1C',
			},
			fontFamily: {
				rubik: ["rubik-mono-one", "sans-serif"],
				consolas: ["consolas", "sans-serif"],
				inter: ['inter', 'sans-serif']
			},
			transitionDuration: {
				fast: '200ms',
			},
			animation: {
				["infinite-slider"]: "infiniteSlider 10s linear infinite",
			},
			keyframes: {
				infiniteSlider: {
					"0%": { transform: "translateX(0)" },
					"100%": {
						transform: "translateX(calc(-250px * 5))",
					},
				},
			},
		}
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *")
			addVariant("child-hover", "& > *:hover")
		},
	],
}
