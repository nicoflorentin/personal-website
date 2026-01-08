import style from "./App.module.css"
import { Main, Portfolio } from "./components/index.js"
import { AnimatePresence } from "framer-motion"
import { ViewProvider, useView } from "./context/ViewContext"
import ContactModal from "./components/modal/ContactModal"

const Content = () => {
	const { view, activeTab, setActiveTab, navigateToPortfolio, isContactModalOpen } = useView()

	return (
		<div className={style.paperOverlay}>
			<div className="font-consolas z-10 opacity-[0.80] select-none bg-[#000000] h-screen overflow-hidden">
				<div className="m-auto sm:max-w-[1700px] h-full">
					<AnimatePresence mode="wait">
						{view === "main" ? (
							<Main key="main" />
						) : (
							<Portfolio key="portfolio" />
						)}
					</AnimatePresence>
				</div>
			</div>
			<AnimatePresence>
				{isContactModalOpen && <ContactModal />}
			</AnimatePresence>
		</div>
	)
}

function App() {
	console.log("App rendering, rendering ViewProvider")
	return (
		<ViewProvider>
			<Content />
		</ViewProvider>
	)
}

export default App