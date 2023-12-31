/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#93C572;",
        bone: '#DAD7CB'
			},
			fontFamily: {
				rubik: ["rubik-mono-one", "sans-serif"],
				consolas: ["consolas", "sans-serif"],
        inter: ['Inter', 'sans-serif']
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *")
			addVariant("child-hover", "& > *:hover")
		},
	],
}
