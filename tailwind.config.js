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
      }
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *")
			addVariant("child-hover", "& > *:hover")
		},
	],
}
