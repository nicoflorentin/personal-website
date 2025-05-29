const Window = ({ children }) => {
	return (
		<div className="flex h-screen max-w-7xl debug w-full mx-auto">
			{/* Sidebar derecha */}
			<div className="flex flex-col w-56 bg-gray-900 text-white justify-between">
				<div>
					<div className="p-4 text-xl font-bold border-b border-gray-700">
						Título
					</div>
					{/* Puedes agregar más contenido aquí si lo deseas */}
				</div>
				<footer className="p-4 border-t border-gray-700 text-sm text-gray-400">
					Footer simple
				</footer>
			</div>
			{/* Contenido principal (más grande) */}
			<div className="flex-1 flex flex-col bg-gray-800 min-w-0">
				{/* Barra superior */}
				<div className="h-12 bg-gray-700 flex items-center px-4 text-white font-semibold border-b border-gray-600">
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