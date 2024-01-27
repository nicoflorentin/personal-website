import React from "react"

const Main = () => {
	return (
		<section
			className="bg-[#1C1C1C] h-[100vh]
											flex flex-col justify-between"
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
                            font-inter text-bone text-[12px] tracking-[2px] font-[700]
														
														"
					>
						<li className="hover:text-primary transition-all duration-fast">WORK</li>
						<li className="hover:text-primary transition-all duration-fast">TECHNOLOGY</li>
						<li className="hover:text-primary transition-all duration-fast">ABOUT</li>
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
