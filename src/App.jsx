import style from "./App.module.css"
import { Main, Portfolio } from "./components/index.js"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"

function App() {
	const [view, setView] = useState("main")
	const [activeTab, setActiveTab] = useState("about")

	const handleNavigate = (section) => {
		setActiveTab(section)
		setView("portfolio")
	}

	return (
		<div className={style.paperOverlay}>
			<div className="font-consolas z-10 opacity-[0.80] select-none bg-[#000000] h-screen overflow-hidden">
				<div className="m-auto sm:max-w-7xl h-full">
					<AnimatePresence mode="wait">
						{view === "main" ? (
							<Main key="main" onNavigate={handleNavigate} />
						) : (
							<Portfolio key="portfolio" activeTab={activeTab} setActiveTab={setActiveTab} />
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

export default App