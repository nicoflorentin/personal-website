import Project from "../project/Project"
import { projects } from "../../data/projects"

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project => <Project key={project.id} {...project} />)
	}

	return (
		<section
			className="h-[100vh] max-w-2xl m-auto
								lg:max-w-[54rem]
								"
		>
		
		</section>
	)
}

export default Projects
