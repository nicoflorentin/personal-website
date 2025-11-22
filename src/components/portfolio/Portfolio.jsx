import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import About from "../about/About"
import Projects from "../projects/Projects"

const Portfolio = ({ activeTab, setActiveTab }) => {

	return (
		<section
			className="min-h-[100vh] max-w-2xl m-auto h-screen
								lg:max-w-[1200px]
								py-10 flex flex-col
								"
		>
			{/* Top Navigation Bar */}
			<div className="flex justify-center gap-8 mb-8">
				<button
					onClick={() => setActiveTab("about")}
					className={`text-xl font-bold tracking-widest pb-2 border-b-2 transition-all duration-300
						${activeTab === "about"
							? "text-primary border-primary"
							: "text-bone border-transparent hover:text-white"
						}
					`}
				>
					ABOUT
				</button>
				<button
					onClick={() => setActiveTab("projects")}
					className={`text-xl font-bold tracking-widest pb-2 border-b-2 transition-all duration-300
						${activeTab === "projects"
							? "text-primary border-primary"
							: "text-bone border-transparent hover:text-white"
						}
					`}
				>
					PROJECTS
				</button>
			</div>

			{/* Content Area */}
			<div className="flex-grow relative overflow-hidden">
				<AnimatePresence mode="wait">
					{activeTab === "about" ? (
						<motion.div
							key="about"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }}
							transition={{ duration: 0.3 }}
							className="w-full h-full"
						>
							<About />
						</motion.div>
					) : (
						<motion.div
							key="projects"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.3 }}
							className="w-full h-full"
						>
							<Projects />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	)
}

export default Portfolio
