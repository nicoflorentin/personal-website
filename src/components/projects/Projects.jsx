import Project from "../project/Project"
import { projects } from "../../data/projects"



const Projects = () => {



	return (
		<div className="w-full h-full flex flex-col gap-12 max-w-5xl mx-auto px-4 py-8">
			{projects.map((project) => (
				<Project key={project.id} {...project} />
			))}
		</div>
	)
}

export default Projects