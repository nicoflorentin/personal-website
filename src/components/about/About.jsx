import React from "react"
import profileImage from "../../assets/images/profile.jpg"

const About = () => {
	return (
		<section
			className="flex flex-col items-center
						bg-[#1C1C1C]
						font-consolas
						"
		>
			<h2
				className="text-primary text-2xl font-bold text-center
							my-5"
			>
				ABOUT ME
			</h2>
			{/* <img
				className="w-40
							rounded-3xl
							"
				src={profileImage}
				alt="profile"
			/> */}
			<div className="p-5">
				<p
					className="text-bone text-center text-[12px]
								font-inter font-light tracking-wider
								leading-6
								mb-10
								"
				>
					I'm Nicolás, Full Stack Web Developer, Figma digitalizes my projects and then, writing the required code, it
					is perfectly interpreted by the browser. I'm also very passionate about CSS and all the potential it offers
					when works with JS together.
				</p>
			</div>
			<button
				className="text-bone font-inter text-xs leading-4 font-bold tracking-widest
							w-40
							mb-10
							border-l-2 border-bone
							hover:text-secondary hover:border-secondary
							transition-all duration-fast
							"
			>
				CHECK MY EXPERIENCE
			</button>
		</section>
	)
}

export default About
