import ProjectTag from "./ProjectTag";

const Project = ({ title, description, image, githubURL, deployURL, tags = [] }) => {
	return (
		<div className="flex flex-col gap-3 text-center my-3 m-auto max-w-xs md:gap-10 md:max-w-full md:flex-row items-center relative pb-12">
			<div className="md:order-2">
				<h3 className="text-bone font-medium text-lg uppercase tracking-widest mb-5 md:mb-2 md:order-2">
					{title}
				</h3>
				<p className="text-bone font-light leading-5 text-sm tracking-wide">
					{description}
				</p>
				{tags.length > 0 && (
					<div className="flex gap-2 justify-center mt-10">
						{tags.map((tag, index) => (
							<ProjectTag key={index} label={tag} />
						))}
					</div>

				)}
			</div>
			<div className="h-40 min-w-[300px] max-w-[500px]">
				<img src={image} alt="projectImage" className="object-cover w-full h-full border-l-2 pl-1 border-secondary rounded-sm md:rounded-none md:order-1" />
			</div>
			<div className="flex md:flex-col justify-center items-center gap-6 mt-1 font-semibold md:order-2">
				{githubURL && <a href={githubURL} className="text-secondary text-sm px-3 border-l-2 border-secondary hover:text-primary hover:border-primary transition-all duration-fast">
					REPO
				</a>}
				{deployURL && <a href={deployURL} className="text-secondary text-sm px-3 border-l-2 border-secondary hover:text-primary hover:border-primary transition-all duration-fast">
					VISIT
				</a>}
			</div>
		</div>
	);
};

export default Project;
