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

// const Slider = () => {
// 	return (
// 		<div className="relative m-auto w-[1200px] overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-[linear-gradient(to_right,#1C1C1C_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#1C1C1C_0%,rgba(255,255,255,0)_100%)] after:content-['']">
// 			<div className="animate-infinite-slider flex gap-32 w-[calc(1200px*10)]">
// 				{WORDS.map((word, index) => (
// 					<div className="slide w-[fit-content] items-center justify-center text-xl tracking-[5px] uppercase" key={index}>
// 						{word}
// 					</div>
// 				))}
// 				{WORDS.map((word, index) => (
// 					<div className="slide w-[fit-content] items-center justify-center text-xl tracking-[5px] uppercase" key={index}>
// 						{word}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }
export default Slider

// SOLVE - DESIGN - <span className="text-base">DEVELOP</span> - REST - WORK
