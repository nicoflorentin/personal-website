import { SectionTitle, Nav } from "../index";

const Window = ({ children }) => {
	return (
		<div className="flex gap-10 h-screen w-full debug mx-auto">
			{/* Sidebar */}
			<div className="flex flex-col flex-grow bg-gray-950 bg-opacity-30 text-white justify-between">
				<div className="w-[225px] ml-auto debug">
					<SectionTitle label='About' />
					<Nav />
					{/* Puedes agregar más contenido aquí si lo deseas */}
				</div>
				<footer className="p-4 border-t border-gray-800 text-sm text-gray-400">
					Footer simple
				</footer>
			</div>
			{/* Contenido principal (más grande) */}
			<div className="flex flex-col w-[930px]">
				{/* Barra superior */}
				<div className="bg-gray-700\ flex items-center justify-end border-t-2 text-white font-semibold">
					Barra superior
				</div>
				{/* Children debajo de la barra superior */}
				<div className="flex-1 p-4 overflow-auto">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Window;