
import AsideBar from "../asideBar/AsideBar"
import ScrollPressureGauge from "../ui/ScrollPressureGauge"
import { motion } from "framer-motion"
import { useView } from "../../context/ViewContext"
import { TRANSITION_DURATION_LAYOUT } from "../../constants/constants"

const PortfolioLayout = ({
	children,
	activePage,
	onPageChange,
	pages
}) => {
	const { activeTab, setActiveTab, goBack } = useView()



	return (
		<section className="w-full h-full">
			<div className="flex relative h-full w-full max-w-[1200px]¿ mx-auto text-bone font-consolas">
				{/* Sidebar - Entry Animation Left */}
				<motion.div
					className="flex-shrink-0 h-full"
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -100, opacity: 0 }}
					transition={{ duration: TRANSITION_DURATION_LAYOUT }}
				>
					<AsideBar activeSection={activeTab} setActiveSection={setActiveTab} />
				</motion.div>

				{/* Main Content Area - Entry Animation Right */}
				<motion.div
					className="flex-1 flex flex-col h-full pl-16 opacity-0"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 100, opacity: 0 }}
					transition={{ duration: TRANSITION_DURATION_LAYOUT }}
				>

					{/* Top Bar */}
					<header className="h-28 flex flex-col items-start justify-center w-full gap-2 pl-8">
						{/* Navigation Menu */}
						<nav className="flex items-center gap-8">
							{pages?.map((page, index) => (
								<button
									key={page.title}
									onClick={() => onPageChange(index + 1)}
									className={`
										text-lg md:text-sm font-bold tracking-widest uppercase transition-colors duration-300 font-inter
										${activePage === index + 1
											? "text-zinc-200"
											: "text-zinc-600 hover:text-zinc-400"
										}
									`}
								>
									{page.title}
								</button>
							))}
						</nav>
						<div className="w-full h-[1px] bg-zinc-700"></div>
					</header>

					{/* Content */}
					<main className="flex-1 p-8 overflow-hidden relative">
						{children}
					</main>
				</motion.div>
			</div>
			<div className="absolute bottom-10 right-10">
				<ScrollPressureGauge action={goBack} />
			</div>
		</section>
	)
}

export default PortfolioLayout
