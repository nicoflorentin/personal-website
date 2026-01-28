import Project from "../project/Project"
import { projects } from "../../data/projects"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

const Projects = () => {
	return (
		<Carousel
			opts={{ align: "start" }}
			className="w-full m-auto animate-in fade-in slide-in-from-bottom-4 duration-500 font-inter"
		>
			<CarouselContent className="h-[690px]">
				{projects.map((project) => (
					<CarouselItem className="basis-1/3 ml-4" key={project.id}>
						<Project {...project} />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}

export default Projects