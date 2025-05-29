import { Window } from '../index'

const About = ({ scroller, scrollToSection }) => {
	return (
		<section
			className="flex flex-col justify-around items-center
						h-[100vh] max-w-2xl m-auto
						py-10
						"
		>
			<Window />
		</section>
	)
}

export default About
