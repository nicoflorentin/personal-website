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

		<CardCurtainReveal className="h-full w-full text-bone">
			<CardCurtainRevealBody className="relative z-10 flex flex-col h-full">
				<CardCurtainRevealTitle className="uppercase text-3xl font-bold -tracking-[3px] text-bone">
					{title}
				</CardCurtainRevealTitle>
				<CardCurtainRevealDescription className="my-4 flex-1">
					<p className="text-bone/80 font-light leading-5 text-sm tracking-[1px]">
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

				<div className="flex gap-4">
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

				<CardCurtain />
			</CardCurtainRevealBody>

			<CardCurtainRevealFooter className="mt-auto max-h-[600px]">
				<img
					src={image}
					alt={title}
					className="h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
				/>
			</CardCurtainRevealFooter>
		</CardCurtainReveal>

	);
};

export default Project;
