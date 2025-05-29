import { Window } from '../index'

const About = ({ scroller, scrollToSection }) => {
	return (
		<section
			className="flex flex-col justify-around items-center
						h-[100vh] m-auto
						py-10
						w-full
						debug
						"
		>
			<Window />
		</section>
	)
}

export default About
