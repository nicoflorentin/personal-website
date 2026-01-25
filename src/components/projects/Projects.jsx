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

// import Project from "../project/Project"
// import { projects } from "../../data/projects"

// const Projects = () => {
// 	const ProjectsMap = () => {
// 		return projects.map(project => <Project key={project.id} {...project} />)
// 	}

// 	return (
// 		<div className="h-full w-full m-auto animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden">
// 			<div
// 				className="flex gap-5 font-inter h-full overflow-y-auto 
//              [&-::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
// 			>
// 				<ProjectsMap />
// 			</div>
// 		</div>
// 	)
// }

// export default Projects