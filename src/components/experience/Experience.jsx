import { motion } from "framer-motion"
import { experiences } from "../../data/experience"

const ExperienceItem = ({ company, role, date, description, technologies }) => {
	return (
		<div className="flex flex-col gap-0 mb-10 font-inter">
			<div className="flex items-start sm:items-center justify-between gap-4">
				<h3 className="text-secondary font-bold text-xl tracking-tight sm:text-2xl sm:tracking-wider">{company}</h3>
				<div className="flex-1 h-[1px] bg-zinc-800/50"></div>
				<span className="text-zinc-500 text-xs sm:mt-0 mt-2 tracking-tighter sm:text-xs sm:tracking-widest uppercase whitespace-nowrap">{date}</span>
			</div>
			<div className="flex flex-col gap-1">
				<h4 className="text-bone font-medium text-md opacity-90">{role}</h4>
				<p className="text-zinc-400 leading-relaxed text-sm¿ max-w-3xl">
					{description}
				</p>
			</div>
			<div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
				{technologies.map((tech, index) => (
					<span key={index} className="text-zinc-500 text-sm font-medium">
						{tech}
					</span>
				))}
			</div>
		</div>
	)
}

const Experience = () => {
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
			className="h-full w-full"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="flex flex-col h-full px-2 pb-20">
				{experiences.map(experience => (
					<motion.div key={experience.id} variants={itemVariants}>
						<ExperienceItem {...experience} />
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}

export default Experience
