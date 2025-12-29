import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import About from "../about/About"
import Projects from "../projects/Projects"
import PortfolioLayout from "./PortfolioLayout"

const Portfolio = ({ activeTab, setActiveTab }) => {
	const [activePage, setActivePage] = useState(1)

	// Reset page when switching sections
	useEffect(() => {
		setActivePage(1)
	}, [activeTab])

	const renderContent = () => {
		if (activeTab === "about") {
			return (
				<motion.div
					key={`about-${activePage}`}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="w-full h-full"
				>
					<About page={activePage} />
				</motion.div>
			)
		} else {
			return (
				<motion.div
					key={`projects-${activePage}`}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="w-full h-full"
				>
					<Projects page={activePage} />
				</motion.div>
			)
		}
	}

	const totalPages = activeTab === "about" ? 3 : 2

	return (
		<section className="min-h-[100vh] h-screen m-auto flex flex-col">
			<PortfolioLayout
				activeSection={activeTab}
				setActiveSection={setActiveTab}
				activePage={activePage}
				onPageChange={setActivePage}
				totalPages={totalPages}
			>
				<AnimatePresence mode="wait">
					{renderContent()}
				</AnimatePresence>
			</PortfolioLayout>
		</section>
	)
}

export default Portfolio
