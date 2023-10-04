import React from "react"
import { MailIcon, LinkedinIcon, GitHubIcon, TwitterIcon } from "/src/assets/icons/icons.jsx"
import config from "../tailwind.config.js"
import style from "./App.module.css"
import About from "./components/about/About.jsx"

const { bone } = config.theme.extend.colors

function App() {
	return (
		<div className={style.paperOverlay}>
			<div className="font-consolas z-1 opacity-[0.70]">
				<section className="bg-[#1C1C1C]">
					<header className=" pt-2 text-[8px] text-center mb-20 text-primary tracking-[2px]">
						{/* Contenido del encabezado */}
						2023 - Buenos Aires - Argentina
					</header>
					<div className="flex flex-col items-center">
						<div className="text-primary">
							<h1 className="font-rubik text-[50px] leading-[0.95em] tracking-[10px]">
								{/* Título de la sección Full Stack */}
								FULL <br /> STACK
							</h1>
							<h2 className="text-[15px] tracking-wider pl-1">NICOLÁS FLORENTÍN</h2>
						</div>
						<nav className="navbar">
							{/* Contenido de la barra de navegación */}
							<ul
								className="flex flex-row justify-between py-2 px-4
                            w-60 m-10
                            border border-purple-500 rounded-3xl shadow-[0px_0px_10px_1px_rgba(174,143,219,0.2)]
                            text-bone text-[10px] tracking-[3px] font-[700] font-inter"
							>
								<li>ABOUT</li>
								<li>STACK</li>
								<li>PROJECTS</li>
							</ul>
						</nav>
						<div className="mt-24">
							{/* Contenido de la sección de contacto */}
							<button
								className="flex items-center gap-4
                        shadow-[0px_0px_10px_1px_rgba(200,200,200,0.2)]
                       	text-bone text-lg m-auto
                        border border-bone rounded-3xl py-1 px-6
												hover:shadow-[0px_0px_10px_7px_rgba(200,200,200,0.3)]
												hover:scale-[102%]
												transition-all
												"
							>
								<p>CONTACT ME</p>
								<MailIcon color={bone} size={25} />
							</button>
							<div className="flex justify-center gap-4 items-center my-4">
								<a href="">
									<LinkedinIcon color={bone} size={37} />
								</a>
								<a href="">
									<GitHubIcon color={bone} size={37} />
								</a>
								<a href="">
									<TwitterIcon color={bone} size={37} />
								</a>
							</div>
						</div>
					</div>
					<div className="text-[0.5em] text-primary text-center">
						{/* Contenido del carrusel */}SOLVE - DESIGN - <span className="text-base">DEVELOP</span> - REST - TEAMWORK
					</div>
					<div className="scroll-icon">{/* Icono de desplazamiento */}</div>
				</section>
			</div>
		</div>
	)
}

export default App
