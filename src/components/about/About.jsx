import { motion } from "framer-motion"

const About = () => {
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
			className="flex flex-col justify-start items-start font-inter h-full max-w-4xl pr-10"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* Introducción y Ubicación */}
			<motion.div variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					My name is <span className="text-white font-semibold">Nicolás Florentin</span>, a <span className={techHighlight}>Full-stack Developer</span> based in <span className="text-white">Argentina</span>.
					I specialize in building high-performance digital products, bridging the gap between robust <span className={techHighlight}>Node.js</span> architectures and polished interfaces.
				</p>
			</motion.div>

			{/* Experiencia Web & Mobile */}
			<motion.div className="mt-8" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					Currently, as a <span className="text-white">Freelancer</span>, I focus on <span className={techHighlight}>Astro</span> and <span className={techHighlight}>React</span> to deliver boutique e-commerce solutions integrated with <span className={techHighlight}>Stripe</span>.
					My background includes developing complex MVPs with <span className={techHighlight}>React Native</span>, implementing real-time tracking via <span className={techHighlight}>WebSockets</span> and <span className={techHighlight}>MQTT</span>, and crafting intricate animations with <span className={techHighlight}>Framer Motion</span>.
				</p>
			</motion.div>

			{/* Diseño y Herramientas */}
			<motion.div className="mt-8" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					Beyond the code, I bring a designer's eye to every project. Using <span className={techHighlight}>Figma</span> and <span className={techHighlight}>Photoshop</span>, I transform concepts into intuitive user experiences.
					I'm comfortable working in <span className={techHighlight}>Linux</span> environments and have a proven ability to handle high-pressure situations and customer-facing communication, ensuring that business goals align with user delight.
				</p>
			</motion.div>

			{/* Cierre */}
			<motion.div className="mt-8" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide italic">
					Dedicated to crafting high-quality, scalable solutions that don't just work—they engage.
				</p>
			</motion.div>
		</motion.div>
	)
}

export default About