import React from "react"

const Project = ({ title, description, githubURL, deployURL }) => {
	return (
		<div
			className="px-3 mx-5 my-2
								border-r-2 border-bone
								text-center
								"
		>
			<h3
				className="text-bone font-semibold uppercase
									border border-bone
									"
			>
				{title}
			</h3>
			<p
				className="text-bone
									border border-bone
									text-xs
									"
			>
				{description}
			</p>
			<a
				href={deployURL}
				className="text-bone
									border border-bone
									"
			>
				DEPLOY
			</a>
		</div>
	)
}

export default Project
