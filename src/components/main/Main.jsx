import { useEffect, useRef, useState } from "react";
import Slider from "../slider/Slider";
import icons from "../../assets/icons/Icons";
import resume from '../../assets/documents/cv.pdf';
import CvDownloadItem from "./CvDownloadItem";

const Main = ({ scroller, scrollToSection }) => {
	const [hoveredItem, setHoveredItem] = useState(null);
	const [barIsVisible, setBarIsVisible] = useState(false);
	const intervalRef = useRef(null);

	useEffect(() => {
		intervalRef.current = setInterval(() => setBarIsVisible(prev => !prev), 2000);
		return () => {
			clearInterval(intervalRef.current)
			intervalRef.current = null
		}

	}, [])

	const IconSize = 180

	const iconMap = {
		work: {
			label: 'WORK',
			colored: false,
			icon: <icons.WorkIcon size={IconSize} color={'rgb(174 143 219 )'} />,
			animationDirection: 'down'
		},
		about: {
			colored: false,
			label: 'ABOUT',
			icon: <icons.WorkIcon size={IconSize} color={'rgb(174 143 219 )'} />,
			animationDirection: 'down'
		},
		contact: {
			colored: true,
			label: 'CONTACT',
			icon: <icons.WorkIcon size={IconSize} color={'rgb(174 143 219 )'} />,
			animationDirection: 'down'
		},
		cv: {
			colored: true,
			label: 'CV',
			icon: <icons.WorkIcon size={IconSize} color={'rgb(174 143 219 )'} />,
			animationDirection: 'up'
		}
	};

	return (
		<section className="h-[100vh] m-auto flex flex-col justify-between max-w-2xl sm:max-w-full">
			<header className="pt-2 text-[8px] text-center font-inter font-light text-primary tracking-[2px] sm:text-xs">
				2024 - Buenos Aires - Argentina
			</header>
			<div className="">
				<div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-52 xl:gap-[500px]">
					<div className="text-primary">
						<h1 className="text-[16px] tracking-wide pl-2 font-inter">NICOLÁS FLORENTÍN</h1>
						<h2 className="font-rubik text-[53px] leading-[0.95em] tracking-[10px] mb-20 min-[320px]:text-[60px] lg:text-[80px]">
							FULL <br /> STACK <br /> DEV{barIsVisible ? '' : '/'}
						</h2>
					</div>
					<nav className="navbar">
						<ul className="flex flex-col gap-2 w-52 font-inter text-bone text-sm tracking-[2px] font-[700] lg:text-end">
							<li
								onMouseEnter={() => setHoveredItem("work")}
								onMouseLeave={() => setHoveredItem(null)}
								onClick={() => scrollToSection("projects")}
								className="hover:text-primary transition-all duration-fast cursor-pointer"
							>
								WORK
							</li>
							<li
								onMouseEnter={() => setHoveredItem("about")}
								onMouseLeave={() => setHoveredItem(null)}
								onClick={() => scrollToSection("about")}
								className="hover:text-primary transition-all duration-fast cursor-pointer"
							>
								ABOUT
							</li>
							<li
								onMouseEnter={() => setHoveredItem("contact")}
								onMouseLeave={() => setHoveredItem(null)}
								className="text-secondary hover:text-primary transition-all duration-fast"
							>
								<a href="mailto:nicoflorentn@gmail.com">CONTACT ME</a>
							</li>
							<li
								onMouseEnter={() => setHoveredItem("cv")}
								onMouseLeave={() => setHoveredItem(null)}
								className="text-secondary transition-all duration-fast"
							>
								<CvDownloadItem />
							</li>
						</ul>
					</nav>
				</div>
				<div className={`flex justify-center transition-all duration-200 ${hoveredItem ? 'opacity-100' : 'opacity-0'}`}>
					{/* Muestra el ícono correspondiente según el ítem hovered */}
					{/* {hoveredItem ? <div className="absolute">{iconMap[hoveredItem].icon}</div> : <div></div>} */}
				</div>
			</div>
			<div className="text-primary text-center font-inter tracking-[0.9em] font-light">
				<Slider />
			</div>
		</section>
	);
}

export default Main;
