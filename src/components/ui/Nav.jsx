import { scrollToSection } from "../../utils/scrollToSection";
import { MAIN_ICONS_ABOUT, MAIN_ICONS_PROJECTS, RESET_RESUME_LINK_STATE } from "../../constants/constants";
import { NavItem } from '../index'
import CvDownloadItem from "../main/CvDownloadItem";

const Nav = () => {
  return (
    <nav className='flex flex-col items-end gap-2'>
      <NavItem onClick={() => scrollToSection(MAIN_ICONS_PROJECTS)} label="WORK" />
      <NavItem onClick={() => scrollToSection(MAIN_ICONS_ABOUT)} label="ABOUT" />
      <NavItem>
        <CvDownloadItem resetTime={RESET_RESUME_LINK_STATE} />
      </NavItem>
    </nav>
  );
};

export default Nav;
