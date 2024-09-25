import { createContext, useContext, useState } from "react"

export const MainSectionContext = createContext()

export const MainSectionProvider = ({ children }) => {
	const [clickedMainSectionIcon, setClickedMainSectionIcon] = useState(null)

	return (
		<MainSectionContext.Provider value={{ clickedMainSectionIcon, setClickedMainSectionIcon }}>
			{children}
		</MainSectionContext.Provider>
	)
}

export const useMainSectionContext = () => useContext(MainSectionContext)
