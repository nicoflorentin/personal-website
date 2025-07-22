import gpsApp from "../assets/images/gps.webp"
import auadImage from "../assets/images/auad.png"

export const projects = [
	{
		id: "astro-landing",
		title: "Astro Landing",
		description:
			"Modern and professional landing page for a law firm built with Astro. The project includes production hosting and a custom domain, plus an integrated email service for client contact. Features a sleek design, fast loading times, and optimized SEO to help potential clients find and connect with legal services.",

		image: auadImage,
		githubURL: "",
		deployURL: "https://auad-landing-page.vercel.app/",
		tags: ["Freelance", "Web design", "Figma", "Astro"],
	},
	{
		id: "automenu",
		title: "AutoMenu",
		description:
			"Instantly generate modern design menus and manage every detail from a feature-rich dashboard. Discover an efficient and powerful way to take your restaurant to the next level.",
		image: "https://github.com/nicoflorentin/auto-menu/assets/81888574/56c68267-7bad-4d86-b98e-cacf9bd3a7cb",
		githubURL: "https://github.com/nicoflorentin/auto-menu",
		deployURL: "https://auto-menu-app.vercel.app/",
		tags: ["Web design", "Figma", "React", "MongoDB", "NodeJS"],
	},
	{
		id: "gps-tracker",
		title: "GPS Tracker",
		description:
		"I worked on this project in a professional setting for a company specializing in the distribution of GPS devices and offering a GPS tracking mobile application service.",
		image: gpsApp,
		githubURL: "",
		deployURL: "",
		tags: ["React Native", "Figma", "MongoDB", "Map box API"],
	},
	{
		id: "rn-pomodoro-day-planner",
		title: "Android/IOS Pomodoro App",
		description:
			"Organize your day with a focus on productivity using the Pomodoro technique. Plan tasks, track progress, and boost your efficiency with this intuitive mobile app.",
		image: "https://github.com/user-attachments/assets/c1611870-7fe7-4996-9bd3-20d090751c43",
		githubURL: "https://github.com/nicoflorentin/RN-pomodoro-day-planner",
		deployURL: "",
	},

	// {
	// 	id: "nature",
	// 	title: "NatureXtreme",
	// 	description: "Ecommerce with full CRUD functionality, login and a complete dashboard view",
	// 	image: "https://github.com/nicoflorentin/portfolio/assets/81888574/eb497ade-2788-4c2a-b738-1f26ae5d16fc",
	// 	githubURL: "https://github.com/nicoflorentin/NaturalezaXtreme",
	// 	deployURL: "https://naturaleza-xtreme.vercel.app/",
	// },
	{
		id: "tokio",
		title: "Tokio Blues Dialog Simulator",
		description:
			"Interactive dialogues app that allow you to choose different responses and see how they influence the narrative. A hobby project I thoroughly enjoyed creating, based on the novel 'Norwegian Wood' (Tokyo Blues) by Haruki Murakami",
		image: "https://github.com/nicoflorentin/dialog-simulator/raw/master/dialog-simulator-gif-demo.gif",
		githubURL: "https://github.com/nicoflorentin/dialog-simulator",
		deployURL: "https://tokiobluesdialogs.netlify.app/",
	},
	// {
	//   id: "rickandmorty",
	//   title: "RyM Viewer",
	//   description: "This project queries the Rick and Morty API to display the characters information. It allows users to implement filters and search by text with an unique and charming design",
	//   image: "https://github.com/nicoflorentin/rick_and_morty/assets/81888574/507eedd3-e0dc-46c8-9329-7b4dcc0465c8",
	//   githubURL: "https://github.com/nicoflorentin/rick_and_morty",
	//   deployURL: "https://rymviewer.netlify.app"
	// },
	// {
	//   id: "matrix",
	//   title: "Matrix Navigator",
	//   description: "From a list of information without coordinates, this application assigns a location to each element and allows coherent navigation to the chosen direction.",
	//   image: "https://github.com/nicoflorentin/matrix-navigator/assets/81888574/4d34d1be-d91b-4ca7-93f7-f92410c23cb1",
	//   githubURL: "https://github.com/nicoflorentin/matrix-navigator",
	//   deployURL: "https://matrix-navigator.vercel.app/"
	// },
	// {
	//   id: "pokemon",
	//   title: "Pokémon Viewer",
	//   description: "This project queries the Pokémon API to display the creatures information. It allows users to implement filters and search by text. The cherry on top is the posibility to create your own Pokémon.",
	//   image: "https://github.com/nicoflorentin/pokemon-viewer/assets/81888574/4f50c15b-fe39-4dd4-add9-cb3663d368f4",
	//   githubURL: "https://github.com/nicoflorentin/pokemon-viewer",
	//   deployURL: "https://pokemon-viewer-pi.vercel.app/"
	// }
]
