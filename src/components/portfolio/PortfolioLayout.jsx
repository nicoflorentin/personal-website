import { BsSquareFill } from "react-icons/bs"
import AsideBar from "../asideBar/AsideBar"
import ScrollPressureGauge from "../ui/ScrollPressureGauge"
import { motion } from "framer-motion"
import { useView } from "../../context/ViewContext"
import { TRANSITION_DURATION_LAYOUT } from "../../constants/constants"

const PortfolioLayout = ({
	children,
	activePage,
	onPageChange,
	totalPages,
	sectionTitle,
	pageTitle
}) => {
	const { activeTab, setActiveTab, goBack } = useView()

	const handleNext = () => {
		if (activePage < totalPages) {
			onPageChange(activePage + 1)
		}
	}

	const handlePrev = () => {
		if (activePage > 1) {
			onPageChange(activePage - 1)
		}
	}

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
					<header className="h-28 flex flex-col items-end justify-center w-full gap-2">
						{/* Pagination Controls */}
						<div className="flex items-center gap-4 text-zinc-500">
							<button
								onClick={handlePrev}
								disabled={activePage === 1}
								className="hover:text-white disabled:opacity-30 disabled:hover:text-zinc-500 transition-colors"
							>
								◀
							</button>

							<div className="flex gap-2 text-[0.6rem]">
								{[...Array(totalPages)].map((_, i) => (
									<BsSquareFill
										key={i}
										className={`${i + 1 === activePage ? "text-zinc-400" : "text-zinc-800"}`}
										size={20}
									/>
								))}
							</div>

							<button
								onClick={handleNext}
								disabled={activePage === totalPages}
								className="hover:text-white disabled:opacity-30 disabled:hover:text-zinc-500 transition-colors"
							>
								▶
							</button>
						</div>

						{/* Divider Line */}
						<div className="w-full h-[1px] bg-zinc-800/50"></div>

						{/* Section Subtitle */}
						<h2 className="text-zinc-500 font-bold tracking-widest uppercase text-sm md:text-base flex gap-2">
							<span>{sectionTitle}</span>
							{pageTitle && <span className="text-zinc-700">| {pageTitle}</span>}
						</h2>
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
