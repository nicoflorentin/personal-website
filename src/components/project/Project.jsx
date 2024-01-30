import React from "react"
import icons from "../../assets/icons/Icons"
import config from "../../../tailwind.config"

const Project = ({ title, description, image, githubURL, deployURL }) => {
	const { LinkIcon } = icons
	const { bone, secondary } = config.theme.extend.colors

	return (
		<div
			className="flex flex-col gap-5
						px-5 mx-10 my-2
						border-r-2 border-bone
						text-center
						"
		>
			<h3
				className="text-bone font-semibold uppercase
									text-xl
									"
			>
				{title}
			</h3>
			<p
				className="text-bone text-s tracking-wider
									"
			>
				{description}
			</p>
			<img
				src={image}
				alt="projectImage"
				className="h-20 object-cover
							"
			/>
			<div className="flex justify-center items-center gap-10
							font-semibold">
				<a
					href=''
					className="text-secondary
								px-4
								border-l-2 border-secondary
								hover:text-primary
								hover:border-primary
								transition-all duration-fast
									"
				>
					REPO
				</a>
				<a href="" className="text-secondary
								px-4
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
