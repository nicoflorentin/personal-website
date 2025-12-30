import style from "./App.module.css"
import { Main, Portfolio } from "./components/index.js"

import { Element, scroller } from "react-scroll"

import { useState } from "react"

function App() {
	const [activeTab, setActiveTab] = useState("about")

	const scrollToSection = sectionName => {
		if (sectionName === "about" || sectionName === "projects") {
			setActiveTab(sectionName)
			scroller.scrollTo("portfolio", {
				duration: 800,
				smooth: true,
			})
		} else {
			scroller.scrollTo(sectionName, {
				duration: 800,
				smooth: true,
			})
		}
	}

	return (
		<div className={style.paperOverlay}>
			<div
				className="font-consolas z-10 opacity-[0.80] select-none
											bg-[#000000]
											"
			>
				<div
					className="m-auto
											sm:max-w-7xl¿
											"
				>
					<Main scroller={scroller} scrollToSection={scrollToSection} />
					<Element name="portfolio">
						<Portfolio activeTab={activeTab} setActiveTab={setActiveTab} />
					</Element>
				</div>
			</div>
		</div>
	)
}

export default App