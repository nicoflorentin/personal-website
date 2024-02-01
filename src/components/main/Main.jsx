import React from "react"

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
				className="pt-2 text-[8px] text-center text-primary tracking-[2px]
											"
			>
				{/* Contenido del encabezado */}
				2023 - Buenos Aires - Argentina
			</header>
			<div
				className="flex flex-col items-center
										sm:flex-row
										sm:justify-center
										sm:gap-52
										xl:gap-[500px]
											"
			>
				<div className="text-primary">
					<h1 className="text-[16px] tracking-wide pl-2">NICOLÁS FLORENTÍN</h1>
					<h2
						className="font-rubik text-[70px] leading-[0.95em] tracking-[10px]
												mb-20
												sm:text-[80px]"
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
												sm:text-end
												"
					>
					
						<li
							onClick={() => scrollToSection("projects")}
							className="hover:text-primary transition-all duration-fast"
						>
							WORK
						</li>
						{/* <li onClick={() => scrollToSection('about')} className="hover:text-primary transition-all duration-fast">TECHNOLOGY</li> */}
						<li onClick={() => scrollToSection("about")} className="hover:text-primary transition-all duration-fast">
							ABOUT
						</li>
						<li
							className="text-secondary hover:text-primary
													transition-all duration-fast"
						>
							CONTACT ME
						</li>
					</ul>
				</nav>
			</div>
			<div
				className="text-[0.5em] text-primary text-center
									mb-10
									"
			>
				{/* Contenido del carrusel */}SOLVE - DESIGN - <span className="text-base">DEVELOP</span> - REST - WORK
			</div>
			{/* <div className="scroll-icon">Icono de desplazamiento</div> */}
		</section>
	)
}

export default Main
