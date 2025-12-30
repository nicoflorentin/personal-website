import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const AsideBar = ({ activeSection, setActiveSection }) => {
	return (
		<aside className="w-16 md:w-64 flex-shrink-0 flex flex-col pt-10 pl-6 h-full overflow-hidden relative border">

			{/* Title */}
			<div className="mb-12">
				<h1 className="text-3xl md:text-5xl font-bold tracking-wide text-primary hidden md:block">
					ABOUT ME
				</h1>
			</div>

			{/* Navigation */}
			<nav className="flex flex-col items-end gap-4 text-xs md:text-sm tracking-widest font-bold mb-12">
				<button
					onClick={() => setActiveSection("projects")}
					className={`hover:text-white transition-colors uppercase ${activeSection === 'projects' ? 'text-white' : 'text-gray-500'}`}
				>
					Work
				</button>
				<button
					onClick={() => setActiveSection("about")}
					className={`hover:text-white transition-colors uppercase ${activeSection === 'about' ? 'text-white' : 'text-gray-500'}`}
				>
					About
				</button>
				<a href="/resume.pdf" target="_blank" className="text-purple-400 hover:text-purple-300 uppercase">
					Resume
				</a>
			</nav>

			{/* Socials */}
			<div className="flex flex-col gap-4 text-xl md:text-2xl items-end mb-12 mt-auto">
				<a href="https://github.com/nicoflorentin" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
					<FaGithub />
				</a>
				<a href="https://linkedin.com/in/nicoflorentin" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
					<FaLinkedin />
				</a>
				<a href="#" className="hover:text-white transition-colors">
					<FaTwitter />
				</a>
			</div>

			{/* Footer Text moved to Sidebar */}
			<div className="pr-8 text-[11px] text-zinc-600 font-inter text-right">
				<p className="">
					This site was made mainly in AstroJS and TailwindCSS by Nicolás Florentin - a developer based in Buenos Aires, Argentina
				</p>
				<span className="block font-semibold">2025</span>
			</div>
		</aside>
	)
}

export default AsideBar