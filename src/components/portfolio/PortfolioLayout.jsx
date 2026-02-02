import { useState } from "react"
import AsideBar from "../asideBar/AsideBar"
import ScrollPressureGauge from "../ui/ScrollPressureGauge"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { useView } from "../../context/ViewContext"
import { TRANSITION_DURATION_LAYOUT } from "../../constants/constants"

const PortfolioLayout = ({
	children,
	activePage,
	onPageChange,
	pages
}) => {
	const { activeTab, setActiveTab } = useView()
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

	const handleSidebarClose = () => {
		setIsMobileSidebarOpen(false)
	}

	// Update active tab wrapper to also close sidebar on mobile
	const handleSetActiveTab = (tab) => {
		setActiveTab(tab)
		setIsMobileSidebarOpen(false)
	}

	return (
		<section className="w-full h-full relative">
			{/* Mobile Toggle Button Container */}
			<div className="md:hidden fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0E0D0D] to-transparent pointer-events-none z-40 flex items-end p-6">
				<button
					onClick={() => setIsMobileSidebarOpen(true)}
					className="pointer-events-auto p-3 text-bone hover:text-white transition-colors duration-300"
				>
					<FiMenu size={28} />
				</button>
			</div>

			{/* Mobile Sidebar Drawer */}
			<AnimatePresence>
				{isMobileSidebarOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={handleSidebarClose}
							className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
						/>

						{/* Drawer */}
						<motion.div
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="md:hidden fixed top-0 left-0 h-full w-[280px] z-50 bg-[#121212] border-r border-zinc-800 shadow-2xl"
						>
							<div className="flex h-full flex-col relative">
								<AsideBar activeSection={activeTab} setActiveSection={handleSetActiveTab} />
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			<div className="flex relative h-full max-w-[1200px] mx-auto text-bone font-consolas">
				{/* Sidebar - Desktop (Hidden on Mobile) */}
				<motion.div
					className="hidden md:block flex-shrink-0 h-full"
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -100, opacity: 0 }}
					transition={{ duration: TRANSITION_DURATION_LAYOUT }}
				>
					<AsideBar activeSection={activeTab} setActiveSection={setActiveTab} />
				</motion.div>

				{/* Main Content Area - Entry Animation Right */}
				<motion.div
					className="flex-1 flex flex-col h-full opacity-0 pl-4 md:pl-20"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 100, opacity: 0 }}
					transition={{ duration: TRANSITION_DURATION_LAYOUT }}
				>

					{/* Top Bar */}
					<header className="flex flex-col items-start justify-center w-full gap-2 pt-10">
						{/* Navigation Menu */}
						<nav className="flex items-center sm:gap-8 mx-5 sm:mx-0">
							{pages?.map((page, index) => (
								<button
									key={page.title}
									onClick={() => onPageChange(index + 1)}
									className={`
										text-sm md:text-md font-bold tracking-widest uppercase transition-colors duration-300 font-inter
										${activePage === index + 1
											? "text-bone hover:text-primary"
											: "text-zinc-600 hover:text-primary"
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
					<main className="h-full py-10 relative">
						{children}
					</main>
				</motion.div>
			</div>
			{/* <div className="absolute bottom-10 right-0">
				<ScrollPressureGauge action={goBack} />
			</div> */}
		</section>
	)
}

export default PortfolioLayout
