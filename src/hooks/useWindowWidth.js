import { useState, useEffect } from "react"

/**
 * Custom hook to track window width
 * @returns {number} Current window width in pixels
 */
export const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	)

	useEffect(() => {
		// Handler to call on window resize
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		// Add event listener
		window.addEventListener("resize", handleResize)

		// Call handler right away so state gets updated with initial window size
		handleResize()

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return windowWidth
}
