import style from "./App.module.css"
import { Main, Portfolio } from "./components/index.js"
import { AnimatePresence } from "framer-motion"
import { ViewProvider, useView } from "./context/ViewContext"
import ContactModal from "./components/modal/ContactModal"
import LanguageSelector from "./components/ui/LanguageSelector"

// Importa tu nuevo componente (ajusta la ruta según donde lo guardaste)
import { BackgroundGradientAnimation } from "./components/ui/BackgroundGradientAnimation"
import BirdPencil from "./components/ui/BirdPencil"

const Content = () => {
	const { view, isContactModalOpen } = useView()

	return (
		// 1. CAPA BASE: Color negro sólido
		<div className="relative min-h-screen w-full bg-blue-800/10 select-none overflow-x-hidden">
			<title>Nicolás Florentin | Portfolio</title>
			<meta
				name="description"
				content="Portfolio de Nicolás Florentin, desarrollador full stack en React, Node.js y Linux."
			/>

			{/* 2. CAPA ANIMACIÓN: Los gradientes */}
			<div className="absolute inset-0 z-0">
				<BackgroundGradientAnimation
					// containerClassName forza a que ocupe el espacio padre absolutoo
					containerClassName="absolute inset-0 h-full w-full opacity-[0.1]"

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

			{/* Bird Pencil SVG */}
			<div className="fixed left-1/2 blur-[1px]
										sm:-translate-x-[20%] sm:-bottom-[900px]
										-bottom-[900px] -translate-x-[30%]
										lg:block opacity-10">
				<BirdPencil className="2xl:w-[1700px] 2xl:h-[1700px]
															md:w-[1550px] md:h-[1550px] 
															w-[1500px] h-[1500px] opacity-5" />
			</div>

			{/* 4. CAPA CONTENIDO: Tu app real (z-index superior) */}
			<div className="relative z-20 font-consolas sm:max-w-[1700px] m-auto min-h-screen">
				{/* <div className="absolute top-4 right-4 z-50">
					<LanguageSelector />
				</div> */}

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