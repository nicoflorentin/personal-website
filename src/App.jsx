import React from "react"
import icons from "./assets/icons/Icons.jsx"
import style from "./App.module.css"
import { Main } from "./components/index.js"

const { MailIcon, LinkedinIcon, GitHubIcon, TwitterIcon } = icons

function App() {
	return (
		<div className={style.paperOverlay}>
			<div className="font-consolas z-1 opacity-[0.80]">
				<Main />
			</div>
		</div>
	)
}

export default App
