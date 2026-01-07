import { BsBriefcaseFill, BsFillPersonLinesFill } from "react-icons/bs";
import { ImFolderDownload } from "react-icons/im";
import CvDownloadItem from "../components/main/CvDownloadItem";
import {
	LIST_ITEM_BIG_ICON_SIZE,
	LIST_ITEM_ICON_SIZE,
	MAIN_ICONS_ABOUT,
	MAIN_ICONS_PROJECTS,
	MAIN_ICONS_RESUME,
	RESET_RESUME_LINK_STATE,
} from "../constants/constants";

export const getNavConfig = (onNavigate) => [
	{
		name: MAIN_ICONS_PROJECTS,
		icon: <BsBriefcaseFill color="#93C572" size={LIST_ITEM_ICON_SIZE} />,
		bigIcon: (
			<BsBriefcaseFill color="#93C572" size={LIST_ITEM_BIG_ICON_SIZE} />
		),
		onClick: () => onNavigate(MAIN_ICONS_PROJECTS),
		content: "WORK",
	},
	{
		name: MAIN_ICONS_ABOUT,
		icon: (
			<BsFillPersonLinesFill color="#93C572" size={LIST_ITEM_ICON_SIZE} />
		),
		bigIcon: (
			<BsFillPersonLinesFill color="#93C572" size={LIST_ITEM_BIG_ICON_SIZE} />
		),
		onClick: () => onNavigate(MAIN_ICONS_ABOUT),
		content: "ABOUT",
	},
	{
		name: MAIN_ICONS_RESUME,
		icon: <ImFolderDownload color="#93C572" size={LIST_ITEM_ICON_SIZE} />,
		bigIcon: (
			<ImFolderDownload color="#93C572" size={LIST_ITEM_BIG_ICON_SIZE} />
		),
		onClick: () => { },
		content: <CvDownloadItem resetTime={RESET_RESUME_LINK_STATE} />,
	},
];
