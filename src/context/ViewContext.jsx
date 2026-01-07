import { createContext, useContext, useState } from "react"

const ViewContext = createContext()

export const ViewProvider = ({ children }) => {
	const [view, setView] = useState("main")
	const [activeTab, setActiveTab] = useState("about")
	const [firstPageLoad, setFirstPageLoad] = useState(true)

	const navigateToPortfolio = (section) => {
		setActiveTab(section)
		setView("portfolio")
		setFirstPageLoad(false)
	}

	const goBack = () => {
		setView("main")
	}

	return (
		<ViewContext.Provider value={{ view, activeTab, firstPageLoad, setActiveTab, navigateToPortfolio, goBack }}>
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
