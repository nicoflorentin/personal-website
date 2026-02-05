import { useWindowWidth } from "@/hooks/useWindowWidth";
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
	const windowWidth = useWindowWidth();
	const isMobile = windowWidth < 768;

	return (
		<CardCurtainReveal className="h-full max-h-[1000px] w-full text-bone" isMobile={isMobile}>
			<CardCurtainRevealBody className="relative z-10 flex flex-col h-full px-10 md:px-0">
				<CardCurtainRevealTitle className="uppercase text-3xl font-bold -tracking-[3px] text-bone">
					{title}
				</CardCurtainRevealTitle>
				<CardCurtainRevealDescription className="my-2 flex-1">
					<p className="text-bone/80 leading-5 text-sm tracking-[1px]">
						{description}
					</p>
					{tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mt-2">
							{tags.map((tag, index) => (
								<ProjectTag key={index} label={tag} />
							))}
						</div>
					)}
				</CardCurtainRevealDescription>

				<CardCurtainRevealDescription className="flex gap-4 mb-2">
					{githubURL && (
						<a
							href={githubURL}
							target="_blank"
							rel="noreferrer"
							className="text-secondary text-sm px-3 py-1 border border-secondary hover:border-primary rounded-full hover:bg-primary hover:font-bold hover:text-zinc-950 transition-all duration-fast"
						>
							REPO
						</a>
					)}
					{deployURL && (
						<a
							href={deployURL}
							target="_blank"
							rel="noreferrer"
							className="text-secondary text-sm px-3 py-1 border border-secondary hover:border-primary rounded-full hover:bg-primary hover:font-bold hover:text-zinc-950 transition-all duration-fast"
						>
							VISIT
						</a>
					)}
				</CardCurtainRevealDescription>

				<CardCurtain />
			</CardCurtainRevealBody>

			<CardCurtainRevealFooter className="mt-auto max-h-[600px] w-full">
				<img
					src={image}
					alt={title}
					className="h-64 w-full object-cover grayscale rounded-b-xl hover:grayscale-0 transition-all duration-500"
				/>
			</CardCurtainRevealFooter>
		</CardCurtainReveal>

	);
};

export default Project;
