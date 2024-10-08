import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../slider/Slider";
import CvDownloadItem from "./CvDownloadItem";
import { MAIN_ICONS_ABOUT, MAIN_ICONS_PROJECTS, MAIN_ICONS_RESUME } from "../../constants/constants";
import NameLabel from "./NameLabel";
import Header from "./Header";
import { BsBriefcaseFill, BsFillPersonLinesFill } from "react-icons/bs";
import { ImFolderDownload } from "react-icons/im";
import { LIST_ITEM_ICON_SIZE, SCROLL_DELAY_TIME, RESET_SCROLL_DELAY_TIME, RESET_RESUME_LINK_STATE } from "../../constants/constants";
import { useMedia } from "use-media";




const Main = ({ scrollToSection }) => {
	const [hoveredItem, setHoveredItem] = useState(null);
	const [clickedItem, setClickedItem] = useState(null);
	const isDesktop = useMedia({ minWidth: '1024px' });

	const navConfig = [
		{
			name: MAIN_ICONS_PROJECTS,
			// icon: <icons.WorkIcon size={LIST_ITEM_ICON_SIZE} color={'rgb(174 143 219 )'} />,
			icon: <BsBriefcaseFill color="#93C572" size={LIST_ITEM_ICON_SIZE} />,
			onClick: () => scrollToSection(MAIN_ICONS_PROJECTS),
			content: 'WORK'
		},
		{
			name: MAIN_ICONS_ABOUT,
			icon: <BsFillPersonLinesFill color="#93C572" size={LIST_ITEM_ICON_SIZE} />,
			onClick: () => scrollToSection(MAIN_ICONS_ABOUT),
			content: 'ABOUT'
		},
		{
			name: MAIN_ICONS_RESUME,
			icon: <ImFolderDownload color="#93C572" size={LIST_ITEM_ICON_SIZE} />,
			onClick: () => { },
			content: <CvDownloadItem resetTime={RESET_RESUME_LINK_STATE} />,
		}
	];

	const handleClick = (item) => {

		if (item.name === MAIN_ICONS_RESUME) {
			setClickedItem(item.name);
			setTimeout(() => {
				setClickedItem(null);
			}, RESET_RESUME_LINK_STATE);
		} else {
			setClickedItem(item.name);
			setTimeout(() => {
				item.onClick()
			}, SCROLL_DELAY_TIME + !isDesktop && 500);
			setTimeout(() => {
				setClickedItem(null)
			}, RESET_SCROLL_DELAY_TIME);

		}
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
									{isDesktop && hoveredItem === itemConfig.name && (
										<motion.span
											className="absolute opacity-0 lg:opacity-100"
											initial={{ x: 35, opacity: 0 }}
											animate={clickedItem === itemConfig.name ? { x: 100, opacity: 0 } : { x: 30, opacity: 1 }}
											transition={{ duration: 0.3, ease: 'easeOut' }}
										>
											{itemConfig.icon}
										</motion.span>
									)}

									{!isDesktop && clickedItem === itemConfig.name && (
										<motion.span
											className="absolute opacity-100 lg:opacity-100"
											initial={{ x: 35, opacity: 0 }}
											animate={clickedItem === itemConfig.name ? { x: 100, opacity: 1 } : { x: 30, opacity: 0 }}
											transition={{ duration: 0.5, ease: 'easeOut' }}
										>
											{itemConfig.icon}
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
