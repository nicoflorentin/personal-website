import React from "react"
import icons from "../../assets/icons/Icons"
import config from "../../../tailwind.config"

const Project = ({ title, description, image, githubURL, deployURL }) => {
	const { LinkIcon } = icons
	const { bone, secondary } = config.theme.extend.colors

	return (
		<div
			className="flex flex-col gap-3
						px-5 mx-10 my-3
						border-r-2 border-bone
						text-center
						"
		>
			<h3
				className="text-bone font-medium uppercase tracking-widest
									text-lg
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
			<img
				src={image}
				alt="projectImage"
				className="h-32 object-cover
							"
			/>
			<div className="flex justify-center items-center gap-6 mt-1
							font-semibold">
				<a
					href=''
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
				<a href="" className="text-secondary text-sm
								px-3
								border-l-2 border-secondary
								hover:text-primary
								hover:border-primary
								transition-all duration-fast
									">
					DEPLOY
				</a>
			</div>
		</div>
	)
}

export default Project
