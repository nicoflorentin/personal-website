import { experiences } from "../../data/experience"

const ExperienceItem = ({ company, role, date, description, technologies }) => {
	return (
		<div className="flex flex-col gap-0 mb-10 font-inter">
			<div className="flex items-start sm:items-center justify-between gap-4">
				<h3 className="text-secondary font-bold text-xl tracking-tight sm:text-2xl sm:tracking-wider">{company}</h3>
				<div className="flex-1 h-[1px] bg-zinc-800/50"></div>
				<span className="text-zinc-500 text-xs sm:mt-0 mt-2 tracking-tighter sm:text-xs sm:tracking-widest uppercase whitespace-nowrap">{date}</span>
			</div>
			<div className="flex flex-col gap-3">
				<h4 className="text-bone font-medium text-md opacity-90">{role}</h4>
				<p className="text-zinc-400 font-light leading-relaxed text-sm¿ max-w-3xl">
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
	return (
		<div className="h-full w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div className="flex flex-col h-full overflow-y-auto pr-4 pb-20 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
				{experiences.map(experience => (
					<ExperienceItem key={experience.id} {...experience} />
				))}
			</div>
		</div>
	)
}

export default Experience
