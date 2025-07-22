import Project from "../project/Project"
import { projects } from "../../data/projects"

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project => <Project key={project.id} {...project} />)
	}

	return (
		<section
			className="h-[100vh] max-w-2xl m-auto
								lg:max-w-[1200px]
								"
		>
			<h2
				className="text-primary text-3xl font-bold
                   text-center
									 tracking-wide
                   p-10
									 "
			>
				WORK
			</h2>
			<div
				className="flex flex-col gap-10
                   font-inter
									 px-3 m-auto
									 h-[80vh] overflow-y-auto" // Añade esta línea para permitir el desplazamiento vertical
			>
				<ProjectsMap />
			</div>
		</section>
	)
}

export default Projects
