import React from "react"
import icons from "./assets/icons/Icons.jsx"
import style from "./App.module.css"
import { About, Main, Projects } from "./components/index.js"

import { Element, scroller } from "react-scroll"

function App() {
	const scrollToSection = sectionName => {
		scroller.scrollTo(sectionName, {
			duration: 800,
			smooth: true,
		})
	}

	return (
		<div className={style.paperOverlay}>
			<div
				className="font-consolas z-1 opacity-[0.60] select-none
											bg-[#000000] 
											
											"
			>
				<div
					className="m-auto
											sm:max-w-7xl
											"
				>
					<Main scroller={scroller} scrollToSection={scrollToSection} />
					<Element name="about">
						<About scroller={scroller} scrollToSection={scrollToSection} />
					</Element>
					<Element name="projects">
						<Projects />
					</Element>
				</div>
			</div>
		</div>
	)
}

export default App
