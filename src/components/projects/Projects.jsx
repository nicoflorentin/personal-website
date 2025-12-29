import Project from "../project/Project"
import { projects } from "../../data/projects"

const Projects = ({ page = 1 }) => {
	const ITEMS_PER_PAGE = 3
	const startIndex = (page - 1) * ITEMS_PER_PAGE
	const selectedProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

	const ProjectsMap = () => {
		return selectedProjects.map(project => <Project key={project.id} {...project} />)
	}

	return (
		<div className="h-full w-full max-w-[1200px] m-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div
				className="flex flex-col gap-10
                   font-inter
									 px-3 m-auto
									 h-full overflow-y-auto pr-2 pb-20 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
			>
				<ProjectsMap />
			</div>
		</div>
	)
}

export default Projects
