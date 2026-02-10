import { motion } from "framer-motion"
import birdPencilUrl from "../../assets/images/bird-pencil.svg"

const BirdPencil = ({ className = "" }) => {
	return (
		<motion.div
			className={`relative group cursor-pointer w-32 h-32 ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<div
				className="absolute inset-0 bg-bone/20 transition-all duration-700 ease-in-out group-hover:bg-primary group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(147,197,114,0.6)]"
				style={{
					maskImage: `url('${birdPencilUrl}')`,
					WebkitMaskImage: `url('${birdPencilUrl}')`,
					maskSize: "contain",
					WebkitMaskSize: "contain",
					maskRepeat: "no-repeat",
					WebkitMaskRepeat: "no-repeat",
					maskPosition: "center",
					WebkitMaskPosition: "center",
				}}
			/>
		</motion.div>
	)
}

export default BirdPencil
