import Project from "../project/Project"
import { projects } from "../../data/projects"

import {
	CardCurtainReveal,
	CardCurtainRevealBody,
	CardCurtainRevealDescription,
	CardCurtainRevealFooter,
	CardCurtainRevealTitle,
	CardCurtain
} from "@/components/ui/card-curtain-reveal"

const Projects = () => {
	const ProjectsMap = () => {
		return projects.map(project =>
			<div className="flex">
				<CardCurtainReveal className="h-[560px] w-96 bg-zinc-950 text-zinc-50">
					<CardCurtainRevealBody className="">
						<CardCurtainRevealTitle className="text-3xl font-medium tracking-tight">
							Behind <br />
							the Curtain
						</CardCurtainRevealTitle>
						<CardCurtainRevealDescription className="my-4 ">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium voluptate, eum quia temporibus fugiat rerum nobis modi
								dolor, delectus laboriosam, quae adipisci reprehenderit officiis
								quidem iure ducimus incidunt officia. Magni, eligendi repellendus.
								Fugiat, natus aut?
							</p>
						</CardCurtainRevealDescription>
						<button
							variant={"secondary"}
							size={"icon"}
							className="aspect-square rounded-full"
						>
							Botón
						</button>

						<CardCurtain className=" bg-zinc-50" />
					</CardCurtainRevealBody>

					<CardCurtainRevealFooter className="mt-auto">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							width="100%"
							height="100%"
							alt="Tokyo street"
							className=""
							src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</CardCurtainRevealFooter>
				</CardCurtainReveal>
			</div>)
	}
	// const ProjectsMap = () => {
	// 	return projects.map(project => <Project key={project.id} {...project} />)
	// }

	return (
		<div className="h-full w-full m-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div
				className="flex gap-5 font-inter h-full overflow-y-auto 
             [&-::-webkit-scrollbar]:hidden¿ [-ms-overflow-style:none]¿ [scrollbar-width:none]¿"
			>
				<ProjectsMap />
			</div>
		</div>
	)
}

export default Projects
