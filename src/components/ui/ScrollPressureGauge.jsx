import React, { useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue, useSpring, animate } from 'framer-motion';

const ScrollPressureGauge = ({ action, label = "Back" }) => {
	const [isCompleted, setIsCompleted] = useState(false);
	const pressure = useMotionValue(0);

	// Physics constants
	const PRESSURE_GAIN = 0.2; // How much pressure adds per scroll event
	const DECAY_RATE = 0.98;    // How fast pressure drops (0-1)
	const THRESHOLD = 1;     // Completion threshold

	const TOTAL_ROWS = 25

	// Smooth partial display for the rows
	const smoothPressure = useSpring(pressure, {
		stiffness: 200,
		damping: 20
	});

	// Map pressure (0-1) to rows (0-40) and text opacity
	const rowsActive = useTransform(smoothPressure, [0, 1], [0, TOTAL_ROWS]);
	const textOpacity = useTransform(smoothPressure, [0.1, 0.8], [0, 1]);

	// Decay loop
	useEffect(() => {
		const timer = setInterval(() => {
			const current = pressure.get();
			if (current > 0) {
				const next = current * DECAY_RATE;
				pressure.set(next < 0.001 ? 0 : next);
			}
		}, 16); // ~60fps

		return () => clearInterval(timer);
	}, []);

	// Wheel event listener for Wheel Up only
	useEffect(() => {
		const handleWheel = (event) => {
			if (isCompleted) return;

			// Solo sumar presión si el movimiento es hacia arriba (deltaY negativo)
			if (event.deltaY < 0) {
				const newPressure = Math.min(pressure.get() + PRESSURE_GAIN, 1);
				pressure.set(newPressure);
			}
		};

		window.addEventListener('wheel', handleWheel);
		return () => window.removeEventListener('wheel', handleWheel);
	}, [isCompleted]);

	// Completion check
	useEffect(() => {
		return smoothPressure.onChange((latest) => {
			if (latest >= THRESHOLD && !isCompleted) {
				setIsCompleted(true);
				action && action();
				// Optional: auto-reset or stick could go here
			} else if (latest < THRESHOLD && isCompleted) {
				setIsCompleted(false);
			}
		});
	}, [smoothPressure, isCompleted, action]);

	return (
		<div className="flex flex-col">
			{/* Text Overlay */}
			<motion.div
				style={{ opacity: textOpacity }}
				className="text-white font-consolas text-sm whitespace-nowrap px-3 py-1 rounded"
			>
				{label}
			</motion.div>

			{/* Matrix */}
			<div className="flex gap-1 p-4 rounded-xl backdrop-blur-sm¿ relative">
				{Array.from({ length: 5 }).map((_, colIndex) => (
					<div key={colIndex} className="flex flex-col-reverse gap-1">
						{Array.from({ length: TOTAL_ROWS }).map((_, rowIndex) => (
							<Cell key={rowIndex} index={rowIndex} rowsActive={rowsActive} />
						))}
					</div>
				))}
			</div>
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
		["", "rgba(41, 41, 41, 1)"]
	);

	return (
		<motion.div
			style={{ opacity, backgroundColor }}
			className="w-2 h-2 rounded-[2px]"
		/>
	);
};

export default ScrollPressureGauge;