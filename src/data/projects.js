import gpsApp from "../assets/images/gps.webp"
import auadImage from "../assets/images/auad.png"
import noCountryImage from "../assets/images/telemed.jpeg"

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
		id: "gps-tracker",
		title: "Real-Time GPS Tracking Mobile App",
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
		image: "https://github.com/nicoflorentin/auto-menu/assets/81888574/56c68267-7bad-4d86-b98e-cacf9bd3a7cb",
		githubURL: "https://github.com/nicoflorentin/auto-menu",
		deployURL: "https://auto-menu-app.vercel.app/",
		tags: ["Web design", "Figma", "React", "MongoDB", "NodeJS"],
	},
	{
		id: "no-country-project",
		title: "TeleMedicine Scheduling App",
		description: "Engineered the backend for a secure telemedicine platform. I designed the SQL database and RESTful API to handle complex appointment logic and ensure seamless virtual consultations.",
		image: noCountryImage,
		githubURL: "https://github.com/nicoflorentin/api-nocountry",
		deployURL: "",
		tags: ["Backend", "API", "Database", "SQL", "MariaDB"],
	},
	{
		id: "rn-pomodoro-day-planner",
		title: "Focus-Driven Productivity App",
		description: "Developed a mobile task manager focused on deep work. I implemented the Pomodoro technique with a clean UX to help users track progress and improve their daily productivity.",
		image: "https://github.com/user-attachments/assets/c1611870-7fe7-4996-9bd3-20d090751c43",
		githubURL: "https://github.com/nicoflorentin/RN-pomodoro-day-planner",
		deployURL: "",
		tags: ["React Native", "Productivity", "Design"],
	},
]