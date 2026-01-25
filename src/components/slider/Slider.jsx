import React from "react"
import style from "./Slider.module.css"

export const Slider = () => {
	// const WORDS = ["Solve", "Design", "Develop", "Code", "Create", "Work", "Think", "Share", "Optimize"]
	const WORDS = [
		"Solve",
		"Design",
		"Code",
		"Create",
		"Transform",
		"Work",
		"Share",
		"Innovate",
		"Explore",
		"Enhance"
	];

	const MapWordsComponent = () => {
		return WORDS.map(word => <div key={word} className={style.slide}><p className="uppercase">{word}</p></div>)
	}
	return (
		<>
			<div className={style.slider}>
				<div className={style.slideTrack}>
					<MapWordsComponent />
					<MapWordsComponent />
				</div>
			</div>
		</>
	)
}

export default Slider

// SOLVE - DESIGN - <span className="text-base">DEVELOP</span> - REST - WORK
