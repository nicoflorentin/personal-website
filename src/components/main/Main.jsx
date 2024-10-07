import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../slider/Slider";
import icons from "../../assets/icons/Icons";
import CvDownloadItem from "./CvDownloadItem";
import { MAIN_ICONS_ABOUT, MAIN_ICONS_PROJECTS, MAIN_ICONS_RESUME } from "../../constants/constants";
import NameLabel from "./NameLabel";
import Header from "./Header";

const Main = ({ scrollToSection }) => {
	const [hoveredItem, setHoveredItem] = useState(null);
	const [clickedItem, setClickedItem] = useState(null);

	const LIST_ITEM_ICON_SIZE = 20;

	const navConfig = [
		{
			name: MAIN_ICONS_PROJECTS,
			icon: <icons.WorkIcon size={LIST_ITEM_ICON_SIZE} color={'rgb(174 143 219 )'} />,
			onClick: () => scrollToSection(MAIN_ICONS_PROJECTS),
			content: 'WORK'
		},
		{
			name: MAIN_ICONS_ABOUT,
			icon: <icons.WorkIcon size={LIST_ITEM_ICON_SIZE} color={'rgb(174 143 219 )'} />,
			onClick: () => scrollToSection(MAIN_ICONS_ABOUT),
			content: 'ABOUT'
		},
		{
			name: MAIN_ICONS_RESUME,
			icon: <icons.WorkIcon size={LIST_ITEM_ICON_SIZE} color={'rgb(174 143 219 )'} />,
			onClick: () => { },
			content: <CvDownloadItem />,
		}
	];

	const handleClick = (item) => {
		setClickedItem(item.name);
		setTimeout(() => {
			item.onClick()
		}, 500);
		setTimeout(() => {
			setClickedItem(null)
			setHoveredItem(null)
		}, 1000)
	};

	const handleHover = (itemName) => {
		setHoveredItem(itemName)
	}

	return (
		<section className="h-[100vh] m-auto flex flex-col justify-between max-w-2xl sm:max-w-full">
			<Header />
			<div className="">
				<div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-52 xl:gap-[500px]">
					<NameLabel />
					<nav className="navbar">
						<ul className="flex flex-col gap-2 w-52 font-inter text-bone text-sm tracking-[2px] font-[700] overflow-hidden lg:text-end lg:items-end">
							{navConfig.map((itemConfig, index) => (
								<li
									className="flex items-center transition-all duration-fast cursor-pointer w-fit justify-end hover:text-primary"
									key={index}
									onMouseEnter={() => handleHover(itemConfig.name)}
									onMouseLeave={() => setHoveredItem(null)}
									onClick={() => handleClick(itemConfig)}
								>
									<span>{itemConfig.content}</span>
									{hoveredItem === itemConfig.name && (
										<motion.span
											className="absolute"
											initial={{ x: 35, opacity: 0 }}
											animate={clickedItem === itemConfig.name ? { x: 100, opacity: 0 } : { x: 30, opacity: 1 }}
											transition={{ duration: 0.3, ease: "easeOut" }}
										>
											{clickedItem ? clickedItem === itemConfig.name ? itemConfig.icon : null : itemConfig.icon}
										</motion.span>
									)}
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
};

export default Main;
