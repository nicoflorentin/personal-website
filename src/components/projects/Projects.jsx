import Project from "../project/Project"
import { projects } from "../../data/projects"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project => <CarouselItem className="basis-1/3" key={project.id}><Project {...project} /></CarouselItem>)
	}

	return (
		<Carousel
			opts={{
				align: "start",
				// loop: true,
			}}
			className="w-full m-auto animate-in fade-in slide-in-from-bottom-4 duration-500
								font-inter
             [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
			<CarouselContent className="h-[690px] ">
				<ProjectsMap />
			</CarouselContent>
		</Carousel>
	)
}

export default Projects