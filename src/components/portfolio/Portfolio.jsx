import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PortfolioLayout from "./PortfolioLayout"
import { SECTIONS_CONFIG } from "../../config/sectionConfig"
import { useView } from "../../context/ViewContext"
import { TRANSITION_DURATION_CONTENT } from "../../constants/constants"

const Portfolio = () => {
	const { activeTab, setActiveTab } = useView()
	const [activePage, setActivePage] = useState(1)

	// Reset page when switching sections
	useEffect(() => {
		setActivePage(1)
	}, [activeTab])

	const currentSection = SECTIONS_CONFIG.find(section => section.id === activeTab) || SECTIONS_CONFIG[0]
	const currentPageConfig = currentSection.pages[activePage - 1]
	const ActiveComponent = currentPageConfig?.component

	const renderContent = () => {
		if (!ActiveComponent) return null

		return (
			<motion.div
				key={`${activeTab}-${activePage}`}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: TRANSITION_DURATION_CONTENT }}
				className="w-full h-full"
			>
				<ActiveComponent {...currentPageConfig.props} />
			</motion.div>
		)
	}

	const totalPages = currentSection.pages.length

	return (
		<section className="min-h-[100vh] h-screen m-auto flex flex-col">
			<PortfolioLayout
				activePage={activePage}
				onPageChange={setActivePage}
				totalPages={totalPages}
				sectionTitle={currentSection.title}
				pageTitle={currentPageConfig?.title}
			>
				<AnimatePresence mode="wait">
					{renderContent()}
				</AnimatePresence>
			</PortfolioLayout>
		</section>
	)
}

export default Portfolio
