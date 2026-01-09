import style from "./App.module.css"
import { Main, Portfolio } from "./components/index.js"
import { AnimatePresence } from "framer-motion"
import { ViewProvider, useView } from "./context/ViewContext"
import ContactModal from "./components/modal/ContactModal"

const Content = () => {
	const { view, isContactModalOpen } = useView()

	return (
		/* Contenedor principal con el fondo negro */
		<div className="bg-[#0a0a0a] min-h-screen w-full relative">

			{/* Capa de textura (Overlay)  */}
			<div className={style.paperOverlay} />

			{/* Contenido real  */}
			<div className="relative z-10 font-consolas sm:max-w-[1700px] m-auto h-screen overflow-hidden">
				<AnimatePresence mode="wait">
					{view === "main" ? (
						<Main key="main" />
					) : (
						<Portfolio key="portfolio" />
					)}
				</AnimatePresence>
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