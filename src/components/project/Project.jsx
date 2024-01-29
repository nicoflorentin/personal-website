import React from "react"

const Project = ({ title, description, image, githubURL, deployURL }) => {

	console.log(image)
	return (
		<div
			className="flex flex-col gap-2
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
			<img src={image} alt="" />
			<div className="flex justify-center gap-5">
				<a
					href={deployURL}
					className="text-bone
									"
				>
					REPO
				</a>
				<a
					href={deployURL}
					className="text-bone
									"
				>
					BUTTON TO DEPLOY
				</a>
			</div>
		</div>
	)
}

export default Project
