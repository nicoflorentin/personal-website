import style from "./App.module.css"
import { Main, Portfolio } from "./components/index.js"
import { AnimatePresence } from "framer-motion"
import { ViewProvider, useView } from "./context/ViewContext"

const Content = () => {
	const { view, activeTab, setActiveTab, navigateToPortfolio } = useView()

	return (
		<div className={style.paperOverlay}>
			<div className="font-consolas z-10 opacity-[0.80] select-none bg-[#000000] h-screen overflow-hidden">
				<div className="m-auto sm:max-w-7xl h-full">
					<AnimatePresence mode="wait">
						{view === "main" ? (
							<Main key="main" />
						) : (
							<Portfolio key="portfolio" />
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

function App() {
	return (
		<ViewProvider>
			<Content />
		</ViewProvider>
	)
}

export default App