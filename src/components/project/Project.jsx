import React from "react"
import icons from "../../assets/icons/Icons"
import config from "../../../tailwind.config"

const Project = ({ title, description, image, githubURL, deployURL }) => {
	const { LinkIcon } = icons
	const { bone, secondary } = config.theme.extend.colors

	return (
		<div
			className="flex flex-col gap-3
						text-center
						px-5 my-3 m-auto
						max-w-xs
						border-r-2 border-bone
						md:max-w-full
						"
		>
			<h3
				className="text-bone font-medium uppercase tracking-widest
									text-lg
									md:order-2
									"
			>
				{title}
			</h3>
			<p
				className="text-bone font-light leading-5
									text-sm
									tracking-wide
									md:order-2
									"
			>
				{description}
			</p>
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
									md:order-2"
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
