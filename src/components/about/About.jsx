import { motion } from "framer-motion"

const About = ({ page = 1 }) => {
	const containerVariants = {
		hidden: { opacity: 0, x: -20 },
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

	const techHighlight = "text-white font-medium hover:text-primary transition-colors duration-300 cursor-default relative group"

	return (
		<motion.div
			className="flex flex-col justify-start items-start
						font-inter
						h-full max-w-4xl
						pr-10
						"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div className="" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					My name is <span className="text-white font-semibold">Nicolás Florentin</span>, I'm a <span className={techHighlight}>full-stack developer</span> with a strong focus on JavaScript,
					specializing in building dynamic mobile and web applications.
					Expertise in {" "}
					<span className={techHighlight}>React</span>,{" "}
					<span className={techHighlight}>React Native</span>,{" "}
					<span className={techHighlight}>Node.js</span>,{" "}
					<span className={techHighlight}>PostgreSQL</span>, and{" "}
					<span className={techHighlight}>TailwindCSS</span>.
				</p>
			</motion.div>

			<motion.div className="mt-10" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					I'm also passionate about <span className={techHighlight}>design</span>. <br />
					I use tools like <span className={techHighlight}>Photoshop</span>,
					<span className={techHighlight}> Figma</span>, and
					<span className={techHighlight}> GIMP</span> to transform user-centric concepts
					into seamless, intuitive digital experiences.
				</p>
			</motion.div>

			<motion.div className="mt-10" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					Whether developing responsive user interfaces, optimizing server-side functionality,
					or working within a Linux environment, I'm dedicated to crafting high-quality solutions
					that not only meet business needs but also engage and delight users.
				</p>
			</motion.div>
		</motion.div>
	)
}

export default About