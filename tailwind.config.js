/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#93C572",
				secondary: '#AE8FDB',
				bone: '#ffffff',
				text: '1C1C1C',
			},
			fontFamily: {
				rubik: ["rubik-mono-one", "sans-serif"],
				consolas: ["consolas", "sans-serif"],
				inter: ['inter', 'sans-serif'],
				impact: ['impact', 'sans-serif']
			},
			transitionDuration: {
				fast: '200ms',
			},
			animation: {
				["infinite-slider"]: "infiniteSlider 10s linear infinite",
				first: "moveVertical 60s ease infinite",
				second: "moveInCircle 40s reverse infinite",
				third: "moveInCircle 80s linear infinite",
				fourth: "moveHorizontal 80s ease infinite",
				fifth: "moveInCircle 40s ease infinite",
			},
			// animation: {
			// 	["infinite-slider"]: "infiniteSlider 10s linear infinite",
			// 	first: "moveVertical 30s ease infinite",
			// 	second: "moveInCircle 20s reverse infinite",
			// 	third: "moveInCircle 40s linear infinite",
			// 	fourth: "moveHorizontal 40s ease infinite",
			// 	fifth: "moveInCircle 20s ease infinite",
			// },
			keyframes: {
				infiniteSlider: {
					"0%": { transform: "translateX(0)" },
					"100%": {
						transform: "translateX(calc(-250px * 5))",
					},
				},
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
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
