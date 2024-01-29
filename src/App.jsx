import React from "react"
import icons from "./assets/icons/Icons.jsx"
import style from "./App.module.css"
import { About, Main, Projects } from "./components/index.js"

const { MailIcon, LinkedinIcon, GitHubIcon, TwitterIcon } = icons

function App() {
	return (
		<div className={style.paperOverlay}>
			<div className="font-consolas z-1 opacity-[0.80] select-none
											bg-[#1C1C1C] 
											">
				<Main />
				<About />
				<Projects />
			</div>
		</div>
	)
}

export default App
