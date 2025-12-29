import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { BsSquareFill } from "react-icons/bs"

const PortfolioLayout = ({
	children,
	activeSection,
	setActiveSection,
	activePage,
	onPageChange,
	totalPages
}) => {

	const handleNext = () => {
		if (activePage < totalPages) {
			onPageChange(activePage + 1)
		}
	}

	const handlePrev = () => {
		if (activePage > 1) {
			onPageChange(activePage - 1)
		}
	}

	return (
		<div className="flex h-full w-full max-w-[1200px] mx-auto text-bone font-consolas">
			{/* Sidebar */}
			<aside className="w-16 md:w-64 flex-shrink-0 flex flex-col pt-10 pl-6 h-full overflow-hidden relative">

				{/* Title */}
				<div className="mb-12">
					<h1 className="text-3xl md:text-5xl font-bold tracking-wider text-green-500/80 hidden md:block">
						ABOUT <span className="text-bone">ME</span>
					</h1>
				</div>

				{/* Navigation */}
				<nav className="flex flex-col items-end pr-8 gap-4 text-xs md:text-sm tracking-widest font-bold mb-12">
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
				<div className="flex flex-col gap-4 text-xl md:text-2xl items-end pr-8 mb-12">
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
				<div className="pr-8 text-[10px] text-zinc-600 font-inter text-right">
					<p className="max-w-[150px] ml-auto">
						This site was made mainly in AstroJS and TailwindCSS by Nicolás Florentin - a developer based in Buenos Aires, Argentina
					</p>
					<span className="block mt-2">2025</span>
				</div>
			</aside>

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col h-full border-l border-zinc-800/50">

				{/* Top Bar */}
				<header className="h-28 flex flex-col items-end justify-center px-8 w-full border-b border-zinc-800/50 gap-2">
					{/* Pagination Controls */}
					<div className="flex items-center gap-4 text-zinc-500">
						<button
							onClick={handlePrev}
							disabled={activePage === 1}
							className="hover:text-white disabled:opacity-30 disabled:hover:text-zinc-500 transition-colors"
						>
							◀
						</button>

						<div className="flex gap-2 text-[0.6rem]">
							{[...Array(totalPages)].map((_, i) => (
								<BsSquareFill
									key={i}
									className={i + 1 === activePage ? "text-zinc-400" : "text-zinc-800"}
								/>
							))}
						</div>

						<button
							onClick={handleNext}
							disabled={activePage === totalPages}
							className="hover:text-white disabled:opacity-30 disabled:hover:text-zinc-500 transition-colors"
						>
							▶
						</button>
					</div>

					{/* Divider Line */}
					<div className="w-full max-w-[300px] h-[1px] bg-zinc-800/50"></div>

					{/* Section Subtitle */}
					<h2 className="text-zinc-500 font-bold tracking-widest uppercase text-sm md:text-base">
						{activeSection === 'about' ? 'THIS IS SOMETHING ABOUT ME' : 'SELECTED WORKS'}
					</h2>
				</header>

				{/* Content */}
				<main className="flex-1 p-8 overflow-hidden relative">
					{children}
				</main>
			</div>
		</div>
	)
}

export default PortfolioLayout
