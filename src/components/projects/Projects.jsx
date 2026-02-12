import { motion } from "framer-motion"
import Project from "../project/Project"
import { projects } from "../../data/projects"



const Projects = () => {

	const containerVariants = {
		hidden: { opacity: 0, y: -5 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				staggerChildren: 0.2
			}
		}
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 }
	}

	return (
		<motion.div
			className="w-full h-full flex flex-col gap-12 max-w-5xl "
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{projects.map((project) => (
				<motion.div key={project.id} variants={itemVariants}>
					<Project {...project} />
				</motion.div>
			))}
		</motion.div>
	)
}

export default Projects