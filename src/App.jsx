import style from "./App.module.css"
import { Main } from "./components/index.js"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Icons from "./assets/icons/Icons"

function App() {
	const [showAbout, setShowAbout] = useState(false)

	const handleAboutClick = () => {
		setShowAbout(true)
	}

	return (
		<div className={style.paperOverlay}>
			<div className="font-consolas z-10 opacity-[0.80] select-none bg-[#000000]">
				<div className="m-auto sm:max-w-7xl">
					<AnimatePresence>
						{!showAbout ? (
							<Main onAboutClick={handleAboutClick} />
						) : (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="min-h-screen flex flex-col justify-between p-10"
							>
								<h2 className="text-primary text-3xl font-bold tracking-wide text-center">
									ABOUT ME
								</h2>
								<div className="flex flex-col items-center justify-center gap-10 max-w-3xl mx-auto">
									<p className="text-bone text-[16px] font-inter font-light tracking-widest leading-6 border-l-2 border-bone p-5">
										I'm a full-stack developer with a strong focus on JavaScript, specializing in building dynamic mobile and web applications. With expertise in <span className="text-lg font-medium">React, React Native, Node.js, PostgreSQL, TailwindCSS</span>.<br /><br />
										I'm also passionate about design. I use tools like <span className="text-lg font-medium">Photoshop, Figma,</span> and <span className="text-lg font-medium">GIMP</span> to transform user-centric concepts into seamless, intuitive digital experiences.
										<br /><br />Whether developing responsive user interfaces, optimizing server-side functionality, or working within a Linux environment, I'm dedicated to crafting high-quality solutions that not only meet business needs but also engage and delight users.
									</p>
								</div>
								<div className="flex justify-center gap-6">
									<a href="https://github.com" target="_blank" rel="noopener noreferrer">
										<Icons.GitHubIcon color="#DAD7CB" size={37} />
									</a>
									<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
										<Icons.LinkedinIcon color="#DAD7CB" size={37} />
									</a>
									<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
										<Icons.TwitterIcon color="#DAD7CB" size={37} />
									</a>
								</div>
								<p className="text-center text-bone text-sm mt-10">
									This site was made mainly in AstroJS and TailwindCSS by Nicolás Florentín - a developer based in Buenos Aires, Argentina
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

export default App