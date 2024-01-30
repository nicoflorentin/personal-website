import React from "react"
import icons from "../../assets/icons/Icons"
import config from "../../../tailwind.config"

const Project = ({ title, description, image, githubURL, deployURL }) => {
	const { LinkIcon } = icons
	const { bone, secondary } = config.theme.extend.colors

	return (
		<div
			className="flex flex-col gap-5
								px-3 mx-10 my-2
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
			<div className="flex justify-center items-center gap-10">
				<a
					href={deployURL}
					className="text-secondary
								px-4
								border-l-2 border-secondary
									"
				>
					REPO
				</a>
				<div className="flex items-center gap-2 text-secondary
								px-4
								border-l-2 border-secondary
									">
					<div>DEPLOY</div>
					<LinkIcon color={secondary} size={25} />
				</div>
			</div>
		</div>
	)
}

export default Project
