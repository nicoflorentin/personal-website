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

	return (
		<motion.div
			className="flex flex-col justify-start items-start font-inter h-full max-w-4xl px-5 mb-20 md:px-0 md:pr-10 md:mb-0"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* Introduction */}
			<motion.div variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					I am <span className="text-white font-semibold">Nicolás Florentin</span>, a front end developer dedicated to providing high-impact <span className="text-white">web solutions and mobile applications</span>. I specialize in turning complex ideas into digital products that are simple, modern, and built for growth.
				</p>
			</motion.div>

			{/* Experience & Results */}
			<motion.div className="mt-8" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					My experience as a freelancer includes <span className="text-white font-medium">developing online stores</span> designed to maximize sales and mobile apps that integrate <span className="text-white">real-time GPS and device tracking</span>. I have also had the privilege of working with a <span className="text-white">prominent law firm</span>, helping them streamline their digital presence and operations.
				</p>
			</motion.div>

			{/* Infrastructure & Stability */}
			<motion.div className="mt-8" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					To ensure stability, I build on the most reliable foundations. I am proficient in <span className="text-white font-medium">Linux</span> because it is the <span className="text-white">backbone of the entire global infrastructure</span>. Mastering this environment allows me to deliver projects that are fast, scalable, and highly secure from the very first line of code.
				</p>
			</motion.div>

			{/* Philosophy & Design */}
			<motion.div className="mt-8" variants={itemVariants}>
				<p className="text-zinc-400 text-md md:text-lg leading-relaxed tracking-wide">
					As a flexible professional and a lifelong learner, I combine technical depth with a focus on <span className="text-white font-medium">reducing friction</span>. My goal is to make technology effortless for the user, ensuring that every digital experience feels natural and every business goal is met.
				</p>
			</motion.div>

			{/* Closing / Status */}
			<motion.div className="mt-8" variants={itemVariants}>
				<p className="text-white text-md md:text-xl font-medium border-l-2 border-white/20 pl-4">
					I am currently open to new opportunities where I can contribute to building software that solves real-world problems at scale
				</p>
			</motion.div>
		</motion.div>
	)
}

export default About