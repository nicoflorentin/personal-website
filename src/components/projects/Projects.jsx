import React from "react"
import Project from "../project/Project"

const projects = [
	{
		id: 1,
		title: "Primer Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fcodex%2Fthe-programming-language-s-of-the-future-24af5cfa8479&psig=AOvVaw0iDjnBn5niSF20Lv1GcQU9&ust=1706651682379000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiHzYzLg4QDFQAAAAAdAAAAABAE",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 2,
		title: "Segundo Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fcodex%2Fthe-programming-language-s-of-the-future-24af5cfa8479&psig=AOvVaw0iDjnBn5niSF20Lv1GcQU9&ust=1706651682379000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiHzYzLg4QDFQAAAAAdAAAAABAE",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 3,
		title: "Tercer Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fcodex%2Fthe-programming-language-s-of-the-future-24af5cfa8479&psig=AOvVaw0iDjnBn5niSF20Lv1GcQU9&ust=1706651682379000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiHzYzLg4QDFQAAAAAdAAAAABAE",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 4,
		title: "Cuarto Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fcodex%2Fthe-programming-language-s-of-the-future-24af5cfa8479&psig=AOvVaw0iDjnBn5niSF20Lv1GcQU9&ust=1706651682379000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiHzYzLg4QDFQAAAAAdAAAAABAE",
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
]

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project => <Project key={project.id} {...project} />)
	}

	return (
		<section className="h-[100vh]">
			<h2
				className="text-primary text-3xl font-bold
								text-center
								p-10
								"
			>
				WORK
			</h2>
			<div
				className="flex flex-col gap-8
									font-consolas"
			>
				<ProjectsMap />
			</div>
		</section>
	)
}

export default Projects
