import React from "react"
import icons from "../../assets/icons/Icons"
import config from "../../../tailwind.config"

const Project = ({ title, description, image, githubURL, deployURL }) => {
	return (
		<div
			className="flex flex-col gap-3
						text-center
						px-5 my-3 m-auto
						max-w-xs
						md:max-w-full
						md:flex-row
						md:items-center
						"
		>
			<div
				className="md:order-2
										self-start
										"
			>
				<h3
					className="text-bone font-medium text-lg
									uppercase tracking-widest
									mb-5
									md:mb-2
									md:order-2
									"
				>
					{title}
				</h3>
				<p
					className="text-bone font-light leading-5
									text-sm
									tracking-wide
									
									"
				>
					{description}
				</p>
			</div>
			<img
				src={image}
				alt="projectImage"
				className="h-32 object-cover
										rounded-sm
										md:order-1
										"
			/>
			<div
				className="flex justify-center items-center gap-6 mt-1
									font-semibold
									md:order-2
									"
			>
				<a
					href={githubURL}
					className="text-secondary text-sm
								px-3
								border-l-2 border-secondary
								hover:text-primary
								hover:border-primary
								transition-all duration-fast
									"
				>
					REPO
				</a>
				<a
					href={deployURL}
					className="text-secondary text-sm
								px-3
								border-l-2 border-secondary
								hover:text-primary
								hover:border-primary
								transition-all duration-fast
									"
				>
					VISIT
				</a>
			</div>
		</div>
	)
}

export default Project
