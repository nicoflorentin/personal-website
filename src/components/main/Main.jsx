import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../slider/Slider";
import CvDownloadItem from "./CvDownloadItem";
import { MAIN_ICONS_ABOUT, MAIN_ICONS_PROJECTS, MAIN_ICONS_RESUME } from "../../constants/constants";
import NameLabel from "./NameLabel";
import Header from "./Header";
import { BsBriefcaseFill, BsFillPersonLinesFill } from "react-icons/bs";
import { ImFolderDownload } from "react-icons/im";
import { LIST_ITEM_ICON_SIZE, SCROLL_DELAY_TIME, RESET_SCROLL_DELAY_TIME, RESET_RESUME_LINK_STATE, LIST_ITEM_BIG_ICON_SIZE } from "../../constants/constants";
import { useMedia } from "use-media";
import NavItem from "../ui/NavItem";

const Main = ({ scrollToSection }) => {
	const [hoveredItem, setHoveredItem] = useState(null);
	const [clickedItem, setClickedItem] = useState(null);
	const isDesktop = useMedia({ minWidth: '1024px' });

	const navConfig = [
		{
			name: MAIN_ICONS_PROJECTS,
			icon: <BsBriefcaseFill color="#93C572" size={LIST_ITEM_ICON_SIZE} />,
			bigIcon: <BsBriefcaseFill color="#93C572" size={LIST_ITEM_BIG_ICON_SIZE} />,
			onClick: () => scrollToSection(MAIN_ICONS_PROJECTS),
			content: 'WORK'
		},
		{
			name: MAIN_ICONS_ABOUT,
			icon: <BsFillPersonLinesFill color="#93C572\" size={LIST_ITEM_ICON_SIZE} />,
			bigIcon: <BsFillPersonLinesFill color="#93C572" size={LIST_ITEM_BIG_ICON_SIZE} />,
			onClick: () => scrollToSection(MAIN_ICONS_ABOUT),
			content: 'ABOUT'
		},
		{
			name: MAIN_ICONS_RESUME,
			icon: <ImFolderDownload color="#93C572\" size={LIST_ITEM_ICON_SIZE} />,
			bigIcon: <ImFolderDownload color="#93C572" size={LIST_ITEM_BIG_ICON_SIZE} />,
			onClick: () => { },
			content: <CvDownloadItem resetTime={RESET_RESUME_LINK_STATE} />,
		}
	];

	const handleClick = (item) => {
		if (item.name === MAIN_ICONS_RESUME) {
			setClickedItem(item.name);
			setTimeout(() => {
				setClickedItem(null);
			}, isDesktop ? RESET_RESUME_LINK_STATE : RESET_SCROLL_DELAY_TIME);
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
		<section className="relative h-[100vh] m-auto flex flex-col justify-between max-w-2xl sm:max-w-full">
			<Header />
			<div className="h-full flex flex-col justify-center ">
				<div id='nav' className="relative flex flex-col items-center lg:flex-row lg:justify-center lg:gap-52 xl:gap-[500px] ">
					<NameLabel />
					<nav className="navbar">
						<ul className="flex flex-col gap-2 w-52 font-inter text-bone text-sm tracking-[2px] font-[700] overflow-hidden lg:text-end lg:items-end">
							{navConfig.map((itemConfig, index) => (
								<NavItem
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
								</NavItem>
							))}
						</ul>
					</nav>
				</div>
				{isDesktop &&
					<div className="">
						<motion.div
							className="absolute w-full bottom-[10%] flex justify-center"
							initial={{ y: 0, opacity: 0 }}
							animate={clickedItem && { y: -30, opacity: [0, 1, 1, 0] }}
							transition={{ duration: 1, ease: 'easeOut' }}
						>
							{navConfig.find(item => item.name === clickedItem)?.bigIcon}
						</motion.div>
					</div>}
			</div>
			<div className="text-primary text-center font-inter tracking-[0.9em] font-light ">
				<Slider />
			</div>
		</section>
	);
};

export default Main;