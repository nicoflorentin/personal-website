import { motion } from "framer-motion"
import homeRepoUrl from "../../assets/images/home-repo.svg"

const HomeRepo = ({ className = "" }) => {
	return (
		<motion.div
			className={`relative w-32 h-32 ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<img src={homeRepoUrl} alt="Home Repo" />
		</motion.div>
	)
}

export default HomeRepo