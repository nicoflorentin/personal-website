import { useState } from "react";
import Slider from "../slider/Slider";
import icons from "../../assets/icons/Icons";
import CvDownloadItem from "./CvDownloadItem";
import { MAIN_ICONS_ABOUT, MAIN_ICONS_PROJECTS, MAIN_ICONS_RESUME } from "../../constants/constants";
import NameLabel from "./NameLabel";
import Header from "./Header";

const Main = ({ scroller, scrollToSection }) => {
	const [hoveredItem, setHoveredItem] = useState(null);

	const BIG_ICON_SIZE = 180
	const LIST_ITEM_ICON_SIZE = 15

	const navConfig = [
		{
			name: MAIN_ICONS_PROJECTS,
			colored: false,
			icon: <icons.WorkIcon size={LIST_ITEM_ICON_SIZE} color={'rgb(174 143 219 )'} />,
			animationDirection: 'down',
			onClick: () => scrollToSection(MAIN_ICONS_PROJECTS),
			content: 'WORK'
		},
		{
			name: MAIN_ICONS_ABOUT,
			colored: false,
			icon: <icons.WorkIcon size={LIST_ITEM_ICON_SIZE} color={'rgb(174 143 219 )'} />,
			animationDirection: 'down',
			onClick: () => scrollToSection(MAIN_ICONS_ABOUT),
			content: 'ABOUT'
		},
		{
			name: MAIN_ICONS_RESUME,
			colored: true,
			icon: <icons.WorkIcon size={LIST_ITEM_ICON_SIZE} color={'rgb(174 143 219 )'} />,
			animationDirection: 'up',
			content: <CvDownloadItem />,
			onClick: () => { },
		}
	]

	console.log('hovered-item', hoveredItem)


	return (
		<section className="h-[100vh] m-auto flex flex-col justify-between max-w-2xl sm:max-w-full">
			<Header />
			<div className="">
				<div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-52 xl:gap-[500px]">
					<NameLabel />
					<nav className="navbar">
						<ul className="flex flex-col gap-2 w-52 font-inter text-bone text-sm tracking-[2px] font-[700] lg:text-end lg:items-end">
							{navConfig.map((config, index) => (

								<li
									className="flex transition-all duration-fast cursor-pointer w-fit hover:text-primary"
									key={index}
									onMouseEnter={() => setHoveredItem(config.name)}
									onMouseLeave={() => setHoveredItem(null)}
									onClick={() => config.onClick()}
								>
									{config.content}
									{/* <config.icon /> */}
								</li>

							))}


						</ul>
					</nav>

				</div>
			</div>
			<div className="text-primary text-center font-inter tracking-[0.9em] font-light">
				<Slider />
			</div>
		</section>
	);
}

export default Main;