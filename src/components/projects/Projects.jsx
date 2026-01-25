import Project from "../project/Project"
import { projects } from "../../data/projects"

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project => <Project key={project.id} {...project} />)
	}

	return (
		<div className="h-full w-full m-auto animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden">
			<div
				className="flex gap-5 font-inter h-full overflow-y-auto 
             [&-::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
			>
				<ProjectsMap />
			</div>
		</div>
	)
}

export default Projects
