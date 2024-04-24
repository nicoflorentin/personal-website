import React from "react"
import profileImage from "../../assets/images/profile.jpg"

const About = ({ scroller, scrollToSection }) => {
	return (
		<section
			className="flex flex-col justify-around items-center
						font-consolas
						h-[100vh] max-w-2xl m-auto
						py-10
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
								mx-11 px-5
								border-l-2 border-bone
								"
				>
					As a JavaScript specialized programmer , I have experience in architecting robust web solutions, with both server-side and client-side dynamics.
					<br /><br />
					My enthusiasm lies in meticulously capturing the essence of web designs and user experience, a hallmark of my prowess as a full-stack web developer.
					<br /><br />
					Dedicated to crafting digital experiences that make an impact on businesses and connect with people.
				</p><span></span>
			</div>
			<button
				onClick={() => { scrollToSection('projects') }}
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
