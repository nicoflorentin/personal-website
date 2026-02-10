import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { SiLinktree } from "react-icons/si"
import NavItem from "../ui/NavItem"
import { SECTIONS_CONFIG } from "../../config/sectionConfig"
import { useView } from "../../context/ViewContext"
import SocialIcon from "../ui/SocialIcon"

const AsideBar = ({ activeSection, setActiveSection }) => {


	const { openContactModal } = useView()

	return (
		<aside className="flex flex-col pt-10 px-6 lg:pl-10 h-full overflow-hidden relative bg-transparent">
			{/* Navigation */}
			<nav>

				<ul className="flex flex-col items-end gap-2 font-inter tracking-[2px] font-[700] mb-12">

					{SECTIONS_CONFIG.map((section) => (
						<NavItem
							key={section.id}
							onClick={() => setActiveSection(section.id)}
							className={`${activeSection === section.id ? 'text-bone' : 'text-bone/30'}`}
						>
							{section.label}
						</NavItem>
					))}
					<NavItem onClick={openContactModal} className="text-purple-400/80 cursor-pointer">
						Contact
					</NavItem>
				</ul>
			</nav>


			{/* Socials */}
			<div className="flex flex-col gap-4 text-3xl md:text-2xl items-end mb-12 mt-auto text-zinc-400">
				<SocialIcon href="https://github.com/nicoflorentin">
					<FaGithub />
				</SocialIcon>
				<SocialIcon href="https://www.linkedin.com/in/nflorentin">
					<FaLinkedin />
				</SocialIcon>
				<SocialIcon href="https://twitter.com/qflorentt">
					<FaTwitter />
				</SocialIcon>
				<SocialIcon href="https://linktr.ee/qflorent">
					<SiLinktree />
				</SocialIcon>
			</div>


			{/* Footer Text moved to Sidebar */}
			{/* <div className="pr-8 text-[11px] text-zinc-600 font-inter text-right">
				<p className="">
					This site was made mainly in AstroJS and TailwindCSS by Nicolás Florentin - a developer based in Buenos Aires, Argentina
				</p>
				<span className="block font-semibold">2025</span>
			</div> */}
		</aside >
	)
}

export default AsideBar