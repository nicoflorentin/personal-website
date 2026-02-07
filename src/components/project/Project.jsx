import ProjectTag from "./ProjectTag";


const Project = ({ title, description, image, githubURL, deployURL, tags = [] }) => {

	// Determine if the URL is an external link or a local asset
	const isExternalImage = image?.startsWith('http');
	const imageSrc = image;

	return (
		<div className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start rounded-lg p-6 transition-all duration-300 hover:bg-gray-600/10 border-t border-transparent hover:border-white/20">
			{/* Image Section */}
			<div className="w-full md:w-1/3 flex-shrink-0 overflow-hidden rounded-md border border-white/10 group-hover:border-white/20 transition-colors">
				<img
					src={imageSrc}
					alt={title}
					className="w-full h-48 md:h-36 object-cover object- transform group-hover:scale-105 transition-transform duration-500"
				/>
			</div>

			{/* Content Section */}
			<div className="flex-1 flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<div className="flex items-center">
						<h3 className="text-xl font-bold text-bone group-hover:text-secondary transition-colors font-inter -my-1">
							{title}
							<span className="inline-block ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300 mb-[4px]">
								↗
							</span>
						</h3>
					</div>

					<p className="text-bone/70 text-sm leading-relaxed font-inter">
						{description}
					</p>
				</div>

				{/* Tech Stack */}
				{tags.length > 0 && (
					<div className="flex flex-wrap gap-2 pt-1">
						{tags.map((tag, index) => (
							<ProjectTag
								key={index}
								label={tag}
							/>
						))}
					</div>
				)}

				{/* Links (Optional - if we want buttons below) */}
				<div className="">
					{deployURL && (
						<a
							href={deployURL}
							target="_blank"
							rel="noreferrer"
							className="hidden" // Hiding for now to match the "clean" reference look where the whole card might be clickable or title has the link. 
						// Only adding if user specifically requests buttons or if we decide to make the title the main link.
						// For now, let's keep the buttons visible but subtle if needed, or stick to the reference which implies the title is the link.
						// The reference has an arrow icon next to the title.
						>
							Visit
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
