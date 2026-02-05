import Project from "../project/Project"
import { projects } from "../../data/projects"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel"
import { useWindowWidth } from "../../hooks/useWindowWidth"

const Projects = () => {
	const windowWidth = useWindowWidth()
	const isMobile = windowWidth < 768
	const orientation = isMobile ? "vertical" : "horizontal"

	return (
		<Carousel
			key={orientation}
			opts={{ align: "start" }}
			className={`w-full h-full m-auto animate-in fade-in slide-in-from-bottom-4 duration-500 font-inter`}
			orientation={orientation}
		>
			<CarouselContent className="ml-1 px-1 h-full max-h-[700px]">
				{projects.map((project) => (
					<CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3" key={project.id}>
						<Project {...project} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden md:flex" />
			<CarouselNext className="hidden md:flex" />
		</Carousel >
	)
}

export default Projects