import React from "react"
import profileImage from "../../assets/images/profile.jpg"

const About = ({scroller, scrollToSection}) => {
	return (
		<section
			className="flex flex-col justify-between items-center
						font-consolas
						h-[100vh] max-w-2xl m-auto
						py-28
						"
		>
			<h2
				className="text-primary text-3xl font-bold 
							text-center
							tracking-wide
							"
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
			<div>
				<p
					className="text-bone text-[16px]
								font-inter font-light tracking-widest
								leading-6
								mb-10 mx-11 px-5
								border-l-2 border-bone
								"
				>
					I'm Nicolás, Full Stack Web Developer, Figma digitalizes my projects and then, writing the required code, it
					is perfectly interpreted by the browser. I'm also very passionate about CSS and all the potential it offers
					when working together with JS.
				</p>
			</div>
				<button
					onClick={() => {scrollToSection('projects')}}
					className="text-secondary font-inter text-sm font-bold
							text-left
							leading-5 tracking-widest
							w-44 px-5
							border-l-2 border-secondary
							hover:text-primary hover:border-primary
							transition-all duration-fast
							"
				>
					CHECK OUT MY EXPERIENCE
				</button>
		</section>
	)
}

export default About
