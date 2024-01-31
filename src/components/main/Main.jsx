import React from "react"

const Main = ({ scroller }) => {

	const scrollToSection = (sectionName) => {
		scroller.scrollTo(sectionName, {
			duration: 800,
			smooth: true,
		})
	}

	return (
		<section
			className="h-[100vh] 
									pb-10 m-auto
									flex flex-col justify-between
									max-w-2xl
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
											"
			>
				<div className="text-primary">
					<h1 className="text-[13px] tracking-wide pl-1">NICOLÁS FLORENTÍN</h1>
					<h2 className="font-rubik text-[50px] leading-[0.95em] tracking-[10px]">
						{/* Título de la sección Full Stack */}
						FULL <br /> STACK <br /> DEV
					</h2>
				</div>
				<nav
					className="navbar
										"
				>
					{/* Contenido de la barra de navegación */}
					<ul
						className="flex flex-col gap-2
                            w-52 m-10
                            font-inter text-bone text-sm tracking-[2px] font-[700]
														
														"
					>
						<li onClick={() => scrollToSection('projects')} className="hover:text-primary transition-all duration-fast">WORK</li>
						{/* <li onClick={() => scrollToSection('about')} className="hover:text-primary transition-all duration-fast">TECHNOLOGY</li> */}
						<li onClick={() => scrollToSection('about')} className="hover:text-primary transition-all duration-fast">ABOUT</li>
						<li className="text-secondary hover:text-primary transition-all duration-fast">CONTACT ME</li>
					</ul>
				</nav>
			</div>
			<div
				className="text-[0.5em] text-primary text-center
												pb-10
												"
			>
				{/* Contenido del carrusel */}SOLVE - DESIGN - <span className="text-base">DEVELOP</span> - REST - WORK
			</div>
			{/* <div className="scroll-icon">Icono de desplazamiento</div> */}
		</section>
	)
}

export default Main
