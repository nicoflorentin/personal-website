import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollPressureMatrix = () => {
	const [isCompleted, setIsCompleted] = useState(false);

	// 1. Capturamos el progreso del scroll (0 a 1)
	const { scrollYProgress } = useScroll();

	// 2. Suavizamos el valor para que la matriz no salte bruscamente
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	// 3. Mapeamos el progreso (0-1) al número de filas (0-40)
	const rowsActive = useTransform(smoothProgress, [0, 1], [0, 40]);

	// 4. Lógica para disparar la acción al final
	useEffect(() => {
		return rowsActive.onChange((latest) => {
			if (latest >= 39.5 && !isCompleted) {
				setIsCompleted(true);
				alert("¡Acción ejecutada!"); // Aquí tu lógica
			} else if (latest < 39.5) {
				setIsCompleted(false);
			}
		});
	}, [rowsActive, isCompleted]);

	return (
		<div className="fixed right-12 top-1/2 -translate-y-1/2 flex gap-1 bg-black/20 p-4 rounded-xl backdrop-blur-sm">
			{/* Generamos 10 columnas */}
			{Array.from({ length: 10 }).map((_, colIndex) => (
				<div key={colIndex} className="flex flex-col-reverse gap-1">
					{/* Generamos 40 filas */}
					{Array.from({ length: 40 }).map((_, rowIndex) => (
						<Cell key={rowIndex} index={rowIndex} rowsActive={rowsActive} />
					))}
				</div>
			))}
		</div>
	);
};

// Componente individual para cada celda de la matriz
const Cell = ({ index, rowsActive }) => {
	// Determinamos la opacidad y color basado en el progreso
	const opacity = useTransform(rowsActive,
		[index, index + 1],
		[0.1, 1]
	);

	const backgroundColor = useTransform(rowsActive,
		[index, index + 1],
		["#27272a", "#a1a1aa"] // De zinc-800 a zinc-400
	);

	return (
		<motion.div
			style={{ opacity, backgroundColor }}
			className="w-2 h-1 rounded-[1px]"
		/>
	);
};

export default ScrollPressureMatrix;