import { scrollToSection } from "../../utils/scrollToSection";
import { MAIN_ICONS_ABOUT, MAIN_ICONS_PROJECTS } from "../../constants/constants";

const Nav = () => {

  return (
    <nav className='flex flex-col items-end gap-1'>
      <button type="button" onClick={() => scrollToSection(MAIN_ICONS_PROJECTS)} className="hover:text-gray-400 transition-colors">WORK</button>
      <button type="button" onClick={() => scrollToSection(MAIN_ICONS_ABOUT)} className="hover:text-gray-400 transition-colors">ABOUT</button>
      <a href="/Nicolas-Florentin-CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">RESUME</a>
    </nav>
  );
};

export default Nav;
