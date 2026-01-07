import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";

export const SECTIONS_CONFIG = [
	{
		id: "projects",
		label: "Work",
		title: "SELECTED WORKS",
		pages: [
			{
				component: Projects,
				props: {},
				title: "Proyectos"
			},
			{
				component: Experience,
				props: {},
				title: "Experiencia profesional"
			},
			// {
			// 	component: () => <div>Otros</div>,
			// 	props: {},
			// 	title: "Otros"
			// }
		]
	},
	{
		id: "about",
		label: "About",
		title: "THIS IS SOMETHING ABOUT ME",
		pages: [
			{
				component: About,
				props: { page: 1 },
				title: "Resumen"
			},
			// {
			// 	component: () => <div>Tecnologias</div>,
			// 	props: { page: 2 },
			// 	title: "Tecnologias"
			// },
			// {
			// 	component: () => <div>Más sobre mí ...</div>,
			// 	props: { page: 3 },
			// 	title: "Mas sobre mi ..."
			// }
		]
	}
];

export default SECTIONS_CONFIG;
