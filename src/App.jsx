import React from "react"
import icons from "./assets/icons/Icons.jsx"
import style from "./App.module.css"
import { About, Main, Projects } from "./components/index.js"

import { Element, scroller } from "react-scroll"

function App() {
	return (
		<div className={style.paperOverlay}>
			<div
				className="font-consolas z-1 opacity-[0.80] select-none
											bg-[#1C1C1C] 
											"
			>
				<Main scroller={scroller} />
				<Element name="about">
					<About />
				</Element>
				<Element name="projects">
					<Projects />
				</Element>
			</div>
		</div>
	)
}

export default App
