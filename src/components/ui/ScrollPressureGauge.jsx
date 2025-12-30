import React, { useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue, useSpring, animate } from 'framer-motion';

const ScrollPressureGauge = ({ action, label = "PRESSURIZING..." }) => {
	const [isCompleted, setIsCompleted] = useState(false);
	const pressure = useMotionValue(0);

	// Physics constants
	const PRESSURE_GAIN = 0.2; // How much pressure adds per scroll event
	const DECAY_RATE = 0.96;    // How fast pressure drops (0-1)
	const THRESHOLD = 0.95;     // Completion threshold

	// Smooth partial display for the rows
	const smoothPressure = useSpring(pressure, {
		stiffness: 200,
		damping: 20
	});

	// Map pressure (0-1) to rows (0-40) and text opacity
	const rowsActive = useTransform(smoothPressure, [0, 1], [0, 40]);
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

	// Wheel event listener
	useEffect(() => {
		const handleWheel = () => {
			if (isCompleted) return;

			// Add pressure, capped at 1
			const newPressure = Math.min(pressure.get() + PRESSURE_GAIN, 1);
			pressure.set(newPressure);
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
		<div className="fixed right-12 top-1/2 -translate-y-1/2">
			{/* Text Overlay */}
			<motion.div
				style={{ opacity: textOpacity }}
				className="absolute right-full mr-4 top-1/2 -translate-y-1/2 text-white font-consolas text-sm tracking-widest whitespace-nowrap bg-black/50 px-3 py-1 rounded backdrop-blur-sm"
			>
				{label}
			</motion.div>

			{/* Matrix */}
			<div className="flex gap-1 bg-black/20 p-4 rounded-xl backdrop-blur-sm relative">
				{Array.from({ length: 10 }).map((_, colIndex) => (
					<div key={colIndex} className="flex flex-col-reverse gap-1">
						{Array.from({ length: 40 }).map((_, rowIndex) => (
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
		["#27272a", "#a1a1aa"] // De zinc-800 a zinc-400
	);

	return (
		<motion.div
			style={{ opacity, backgroundColor }}
			className="w-2 h-1 rounded-[1px]"
		/>
	);
};

export default ScrollPressureGauge;