import { motion } from "framer-motion"
import birdPencilUrl from "../../assets/images/bird-pencil.svg"

const BirdPencil = ({ className = "" }) => {
	return (
		<motion.div
			className={`relative cursor-pointer w-32 h-32 ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 20, delay: 0.5 }}
		>
			<motion.div
				className="absolute inset-0 bg-bone/20"
				animate={{
					backgroundColor: ["rgba(238, 238, 238, 0.2)", "#AE8FDB"],
					scale: [1, 1.1],
					filter: [
						"drop-shadow(0 0 0px rgba(147,197,114,0))",
						"drop-shadow(0 0 15px rgba(147,197,114,0.6))",
					],
				}}
				transition={{
					duration: 40,
					// repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
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
