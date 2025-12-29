const About = ({ page = 1 }) => {
	const getContent = () => {
		switch (page) {
			case 1:
				return (
					<>
						I'm a full-stack developer with a strong focus on JavaScript, specializing in building dynamic mobile and web applications.
						<br /><br />
						I thrive on solving problems and building efficient, scalable solutions that make a real impact.
					</>
				)
			case 2:
				return (
					<>
						With expertise in <span className="hover:scale-125 text-lg font-medium text-primary inline-block transition-transform">React, React Native, Node.js, PostgreSQL, TailwindCSS</span>.
						<br /><br />
						I also have experience with Astro, MongoDB, and express, always eager to learn new technologies to improve my craft.
					</>
				)
			case 3:
				return (
					<>
						I'm also passionate about design. I use tools like <span className="text-lg font-medium text-primary">Photoshop, Figma,</span> and <span className="text-lg font-medium text-primary">GIMP</span> to transform user-centric concepts into seamless, intuitive digital experiences.
						<br /><br />
						Whether developing responsive user interfaces, optimizing server-side functionality, or working within a Linux environment, I'm dedicated to crafting high-quality solutions.
					</>
				)
			default:
				return null
		}
	}

	return (
		<div
			className="flex flex-col justify-center
						font-consolas
						h-full max-w-2xl mx-auto
						"
		>
			<div>
				<p
					className="text-bone text-[16px] md:text-xl
								font-inter font-light tracking-widest
								leading-8 md:leading-10
								mx-0 md:mx-11 px-5
								border-l-2 border-bone/50
								animate-in fade-in slide-in-from-bottom-4 duration-500
								"
				>
					{getContent()}
				</p>
			</div>
		</div>
	)
}

export default About