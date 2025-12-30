import ScrollPressureGauge from "../ui/ScrollPressureGauge"

const About = ({ page = 1 }) => {
	return (
		<div
			className="flex flex-col justify-center items-center
						font-consolas
						h-full max-w-2xl m-auto
						py-10
						"
		>
			<div>
				<p
					className="text-bone text-[16px]
								font-inter font-light tracking-widest
								leading-6
								mx-11 px-5
								border-l-2 border-bone
								"
				>
					I'm a full-stack developer with a strong focus on JavaScript, specializing in building dynamic mobile and web applications. With expertise in <span className="hover:scale-125 text-lg font-medium">React, React Native, Node.js, PostgreSQL, TailwindCSS</span>.<br /><br />
					I'm also passionate about design. I use tools like <span className="text-lg font-medium">Photoshop, Figma,</span> and <span className="text-lg font-medium">GIMP</span> to transform user-centric concepts into seamless, intuitive digital experiences.

					<br /><br />Whether developing responsive user interfaces, optimizing server-side functionality, or working within a Linux environment, I'm dedicated to crafting high-quality solutions that not only meet business needs but also engage and delight users.
				</p>
			</div>
			<ScrollPressureGauge />
		</div>
	)
}

export default About