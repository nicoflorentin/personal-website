import Projects from "../components/projects/Projects";
import About from "../components/about/About";

export const SECTION_CONFIG = [
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
				component: () => (<div>Experiencia profesional</div>),
				props: {},
				title: "Experiencia profesional"
			},
			{
				component: () => <div>Otros</div>,
				props: {},
				title: "Otros"
			}
		]
	},
	{
		id: "about",
		label: "About",
		title: "THIS IS SOMETHING ABOUT ME",
		pages: [
			{ component: About, props: { page: 1 }, title: "Resumen" },
			{ component: About, props: { page: 2 }, title: "Tecnologias" },
			{ component: About, props: { page: 3 }, title: "Mas sobre mi ..." }
		]
	}
];

export default SECTION_CONFIG;
