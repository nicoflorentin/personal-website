import gpsApp from "../assets/images/gps.webp"
import auadImage from "../assets/images/auad.png"
import noCountryImage from "../assets/images/telemed.jpeg"
import automenuImage from "../assets/images/automenu.png"
import pomodoroImage from "../assets/images/pomodoro.png"
import threeHundredImage from "../assets/images/3hundred.png"

export const projects = [
	{
		id: "astro-landing",
		title: "Legal Practice Landing Page",
		description: "Designed and developed a high-performance landing page for a law firm. I managed the full lifecycle from Figma design to Astro implementation and deployment, ensuring a professional digital presence.",
		image: auadImage,
		githubURL: "",
		deployURL: "https://auad-landing-page.vercel.app/",
		tags: ["Freelance", "Web design", "Figma", "Astro"],
	},
	{
		id: "3hundred-landing",
		title: "Marketing Agency Landing Page",
		description: "Developed high-performance components for a leading marketing agency landing page and maintained Node.js and library versions",
		image: threeHundredImage,
		githubURL: "",
		deployURL: "https://www.the3hundred.com/",
		tags: ["Freelance", "Web design", "Keen-slider", "Figma", "NextJS", "TailwindCSS"],
	},
	{
		id: "gps-tracker",
		title: "GPS Tracking Mobile App",
		description: "Developed an MVP for the startup BlipConnection, focusing on UI design, user security and real-time tracking. I integrated Mapbox SDK to provide live location updates and efficient device management.",
		image: gpsApp,
		githubURL: "",
		deployURL: "",
		tags: ["React Native", "Figma", "MongoDB", "Map box API", "MQTT", "WebSockets"],
	},
	{
		id: "automenu",
		title: "Restaurant Menu Solution",
		description: "Created a digital menu system to streamline restaurant operations. I developed both the customer interface and a robust admin dashboard for real-time inventory and price management.",
		image: automenuImage,
		githubURL: "https://github.com/nicoflorentin/auto-menu",
		deployURL: "https://auto-menu-app.vercel.app/",
		tags: ["Web design", "Figma", "React", "MongoDB", "NodeJS"],
	},
	{
		id: "no-country-project",
		title: "TeleMedicine Scheduling",
		description: "Engineered the backend for a secure telemedicine platform. I designed the SQL database and RESTful API to handle complex appointment logic and ensure seamless virtual consultations.",
		image: noCountryImage,
		githubURL: "https://github.com/nicoflorentin/api-nocountry",
		deployURL: "",
		tags: ["Backend", "API", "Database", "SQL", "MariaDB"],
	},
	{
		id: "rn-pomodoro-day-planner",
		title: "Productivity Mobile App",
		description: "Developed a mobile task manager focused on deep work. I implemented the Pomodoro technique with a clean UX to help users track progress and improve their daily productivity.",
		image: pomodoroImage,
		githubURL: "https://github.com/nicoflorentin/RN-pomodoro-day-planner",
		deployURL: "",
		tags: ["React Native", "Productivity", "Design"],
	},
]