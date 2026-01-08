import { createContext, useContext, useState } from "react"

const ViewContext = createContext()

export const ViewProvider = ({ children }) => {
	const [view, setView] = useState("main")
	const [activeTab, setActiveTab] = useState("about")
	const [isFirstPageLoad, setIsFirstPageLoad] = useState(true)
	const [isContactModalOpen, setIsContactModalOpen] = useState(false)
	console.log("ViewProvider mounting")

	const navigateToPortfolio = (section) => {
		setActiveTab(section)
		setView("portfolio")
		setIsFirstPageLoad(false)
	}

	const goBack = () => {
		setView("main")
	}

	const openContactModal = () => setIsContactModalOpen(true)
	const closeContactModal = () => setIsContactModalOpen(false)

	return (
		<ViewContext.Provider value={{
			view,
			activeTab,
			isFirstPageLoad,
			isContactModalOpen,
			setActiveTab,
			navigateToPortfolio,
			goBack,
			openContactModal,
			closeContactModal
		}}>
			{children}
		</ViewContext.Provider>
	)
}

export const useView = () => {
	const context = useContext(ViewContext)
	if (!context) {
		throw new Error("useView must be used within a ViewProvider")
	}
	return context
}
