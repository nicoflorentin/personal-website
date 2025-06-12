// import { AboutSection } from './index'
import { Window } from "../index"

const About = () => {
	return (
		<section
			className='flex flex-col justify-around items-center
						h-[100vh] m-auto
						py-10
						w-full
						'
		>
			<Window title='About me'>
				<section className='max-w-[600px] tracking-widest  font-inter text-bone opacity-90'>
					<div className='space-y-6'>
						<p className='text-lg'>
							I&apos;m a full-stack developer with a strong focus on JavaScript, specializing in building
							dynamic mobile and web applications. With expertise in{" "}
							<span className='font-bold'>React, React Native, Node.js, PostgreSQL, TailwindCSS</span>.
						</p>

						<p className='text-lg'>
							I&apos;m also passionate about design. I use tools like{" "}
							<span className='font-semibold'>Photoshop, Figma,</span> and{" "}
							<span className='font-semibold'>GIMP</span> to transform user-centric concepts into seamless,
							intuitive digital experiences.
						</p>

						<p className='text-lg'>
							Whether developing responsive user interfaces, optimizing server-side functionality, or working
							within a Linux environment, I&apos;m dedicated to crafting high-quality solutions that not only
							meet business needs but also engage and delight users.
						</p>
					</div>
				</section>
			</Window>
		</section>
	)
}

export default About
