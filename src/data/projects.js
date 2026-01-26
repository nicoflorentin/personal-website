import gpsApp from "../assets/images/gps.webp"
import auadImage from "../assets/images/auad.png"
import noCountryImage from "../assets/images/telemed.jpeg"

export const projects = [
	{
		id: "astro-landing",
		title: "Astro Landing",
		description: "Modern landing page for a law firm with integrated email service and SEO optimization.",
		image: auadImage,
		githubURL: "",
		deployURL: "https://auad-landing-page.vercel.app/",
		tags: ["Freelance", "Web design", "Figma", "Astro"],
	},
	{
		id: "gps-tracker",
		title: "GPS Tracker",
		description: "Professional mobile application for real-time tracking and GPS device distribution management.",
		image: gpsApp,
		githubURL: "",
		deployURL: "",
		tags: ["React Native", "Figma", "MongoDB", "Map box API"],
	},
	{
		id: "no-country-project",
		title: "TeleMedicine Scheduler",
		description: "Web platform for patients to book and attend virtual medical appointments securely.",
		image: noCountryImage,
		githubURL: "https://github.com/nicoflorentin/api-nocountry",
		deployURL: "",
		tags: ["Backend", "API", "Database", "SQL"],
	},
	{
		id: "automenu",
		title: "AutoMenu",
		description: "Digital menu generator with a feature-rich dashboard for efficient restaurant management.",
		image: "https://github.com/nicoflorentin/auto-menu/assets/81888574/56c68267-7bad-4d86-b98e-cacf9bd3a7cb",
		githubURL: "https://github.com/nicoflorentin/auto-menu",
		deployURL: "https://auto-menu-app.vercel.app/",
		tags: ["Web design", "Figma", "React", "MongoDB", "NodeJS"],
	},
	{
		id: "rn-pomodoro-day-planner",
		title: "Pomodoro Mobile App",
		description: "Intuitive productivity app to plan tasks and track progress using the Pomodoro technique.",
		image: "https://github.com/user-attachments/assets/c1611870-7fe7-4996-9bd3-20d090751c43",
		githubURL: "https://github.com/nicoflorentin/RN-pomodoro-day-planner",
		deployURL: "",
		tags: ["React Native", "Productivity"],
	},
]