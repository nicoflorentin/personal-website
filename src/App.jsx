import style from "./App.module.css"
import { Main, Portfolio } from "./components/index.js"
import { AnimatePresence } from "framer-motion"
import { ViewProvider, useView } from "./context/ViewContext"
import ContactModal from "./components/modal/ContactModal"

// Importa tu nuevo componente (ajusta la ruta según donde lo guardaste)
import { BackgroundGradientAnimation } from "./components/ui/BackgroundGradientAnimation"

const Content = () => {
	const { view, isContactModalOpen } = useView()

	return (
		// 1. CAPA BASE: Color negro sólido
		<div className="relative min-h-screen w-full bg-black overflow-hidden">

			{/* 2. CAPA ANIMACIÓN: Los gradientes */}
			<div className="absolute inset-0 z-0">
				<BackgroundGradientAnimation
					// containerClassName forza a que ocupe el espacio padre absolutoo
					containerClassName="absolute inset-0 h-full w-full opacity-[0.2]"

					// Opcional: Colores más oscuros para que no sea tan brillante
					firstColor="18, 113, 255"
					secondColor="100, 0, 200"
					pointerColor="140, 100, 255"
					size="90%"
					blendingValue="hard-light" // 'overlay' o 'hard-light' funcionan bien con negro
				/>
			</div>

			{/* 3. CAPA TEXTURA: El ruido/papel (z-index intermedio) */}
			<div className={style.paperOverlay} />

			{/* 4. CAPA CONTENIDO: Tu app real (z-index superior) */}
			<div className="relative z-20 font-consolas sm:max-w-[1700px] m-auto h-screen overflow-hidden">
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
	console.log("App rendering...")
	return (
		<ViewProvider>
			<Content />
		</ViewProvider>
	)
}

export default App