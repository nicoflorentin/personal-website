import { scroller } from "react-scroll"

export const scrollToSection = (sectionName) => {
	scroller.scrollTo(sectionName, {
		duration: 800,
		smooth: true,
	})
}
