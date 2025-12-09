import Project from "../project/Project"
import { projects } from "../../data/projects"

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project => <Project key={project.id} {...project} />)
	}

	return (
		<div
			className="h-full max-w-2xl m-auto
								lg:max-w-[1200px]
								"
		>
			<div
				className="flex flex-col gap-10
                   font-inter
									 px-3 m-auto
									 h-[70vh] overflow-y-auto pr-2"
			>
				<ProjectsMap />
			</div>
		</div>
	)
}

export default Projects
