import ProjectTag from "./ProjectTag";
import {
	CardCurtainReveal,
	CardCurtainRevealBody,
	CardCurtainRevealDescription,
	CardCurtainRevealFooter,
	CardCurtainRevealTitle,
	CardCurtain
} from "@/components/ui/card-curtain-reveal"

const Project = ({ title, description, image, githubURL, deployURL, tags = [] }) => {
	return (
		<div className="flex">
			<CardCurtainReveal className="h-[560px]¿ w-96 text-zinc-50 border border-zinc-800 rounded-xl¿">
				<CardCurtainRevealBody className="relative z-10 flex flex-col h-full">
					<CardCurtainRevealTitle className="text-3xl font-medium tracking-tight text-bone">
						{title}
					</CardCurtainRevealTitle>
					<CardCurtainRevealDescription className="my-4 flex-1">
						<p className="text-bone/80 font-light leading-5 text-sm tracking-wide">
							{description}
						</p>
						{tags.length > 0 && (
							<div className="flex flex-wrap gap-2 mt-6">
								{tags.map((tag, index) => (
									<ProjectTag key={index} label={tag} />
								))}
							</div>
						)}
					</CardCurtainRevealDescription>

					<div className="flex gap-4 mt-auto">
						{githubURL && (
							<a
								href={githubURL}
								target="_blank"
								rel="noreferrer"
								className="text-secondary text-sm px-3 py-1 border border-secondary rounded-full hover:bg-secondary hover:text-zinc-950 transition-all duration-fast"
							>
								REPO
							</a>
						)}
						{deployURL && (
							<a
								href={deployURL}
								target="_blank"
								rel="noreferrer"
								className="text-secondary text-sm px-3 py-1 border border-secondary rounded-full hover:bg-secondary hover:text-zinc-950 transition-all duration-fast"
							>
								VISIT
							</a>
						)}
					</div>

					<CardCurtain className="" />
				</CardCurtainRevealBody>

				<CardCurtainRevealFooter className="mt-auto h-64 overflow-hidden">
					<img
						src={image}
						alt={title}
						className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
					/>
				</CardCurtainRevealFooter>
			</CardCurtainReveal>
		</div>
	);
};

export default Project;
