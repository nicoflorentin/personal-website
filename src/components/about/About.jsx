import React from "react"
import profileImage from "../../assets/images/profile.jpg"

const About = () => {
	return (
		<section
			className="flex flex-col justify-between items-center
									bg-[#1C1C1C]
									font-consolas
									h-[100vh]"
		>
			<h2
				className="text-primary text-2xl font-bold text-center
									p-10"
			>
				ABOUT ME
			</h2>
			<img className="rounded-full w-40" src={profileImage} alt="profile" />
			<div className="p-5">
				<p
					className="text-bone text-center
											text-[16px]
											tracking-wider"
				>
					I'm Nicolás, full stack web developer 🎨💻💿, Figma digitalizes my projects and then, writing the required
					code, it is perfectly interpreted by the browser 🧠🚀. I'm also very passionate about CSS and all the
					potential it offers when works with JS together 💪
				</p>
			</div>
			<button
				className="text-secondary leading-4
							border-2 border-secondary
							px-4 py-2 w-40 mb-20
							rounded-full"
			>
				CHECK MY EXPERIENCE
			</button>
		</section>
	)
}

export default About
