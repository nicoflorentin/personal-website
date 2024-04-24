import React from "react"
import Slider from "../slider/Slider"

const Main = ({ scroller, scrollToSection }) => {

	return (
		<section
			className="h-[100vh] m-auto
								flex flex-col justify-between
								max-w-2xl
								sm:max-w-full
								"
		>
			<header
				className="pt-2
									text-[8px] text-center font-inter font-light text-primary tracking-[2px]
									sm:text-xs
											"
			>
				2024 - Buenos Aires - Argentina
			</header>
			<div
				className="flex flex-col items-center
										lg:flex-row
										lg:justify-center
										lg:gap-52
										xl:gap-[500px]
											"
			>
				<div className="text-primary">
					<h1 className="text-[16px] tracking-wide pl-2 font-inter">NICOLÁS FLORENTÍN</h1>
					<h2
						className="font-rubik text-[53px] leading-[0.95em] tracking-[10px]
												mb-20
												min-[320px]:text-[60px]
												lg:text-[80px]"
					>
						{/* Título de la sección Full Stack */}
						FULL <br /> STACK <br /> DEV
					</h2>
				</div>
				<nav className="navbar">
					<ul
						className="flex flex-col gap-2
												w-52
												font-inter text-bone text-sm tracking-[2px] font-[700]
												lg:text-end
												"
					>
					
						<li
							onClick={() => scrollToSection("projects")}
							className="hover:text-primary transition-all duration-fast cursor-pointer"
						>
							WORK
						</li>
						{/* <li onClick={() => scrollToSection('about')} className="hover:text-primary transition-all duration-fast">TECHNOLOGY</li> */}
						<li onClick={() => scrollToSection("about")} className="hover:text-primary transition-all duration-fast cursor-pointer">
							ABOUT
						</li>
						<li
							className="text-secondary hover:text-primary
													transition-all duration-fast"
						>
							<a href="mailto:nicoflorentn@gmail.com">CONTACT ME</a>
						</li>
					</ul>
				</nav>
			</div>
			<div
				className="text-primary text-center font-inter tracking-[0.9em] font-light
									"
			>
				<Slider />
			</div>
			{/* <div className="scroll-icon">Icono de desplazamiento</div> */}
		</section>
	)
}

export default Main
