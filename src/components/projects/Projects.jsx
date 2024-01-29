import React from "react"
import Project from "../project/Project"

const projects = [
	{
		id: 1,
		title: "Primer Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 2,
		title: "Segundo Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 3,
		title: "Tercer Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 4,
		title: "Cuarto Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
]

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project => <Project key={project.id} {...project} />)
	}

	return (
		<section>
			<h2
				className="text-primary text-3xl font-bold
								text-center
								m-10
								"
			>
				WORK
			</h2>
			<div className="flex flex-col font-consolas">
				<ProjectsMap />
			</div>
		</section>
	)
}

export default Projects
