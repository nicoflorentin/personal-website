import { motion } from "framer-motion"
import { FaCopy, FaDownload, FaTimes, FaHeart } from "react-icons/fa"
import { useView } from "../../context/ViewContext"
import resume from '../../assets/documents/Nicolas-Florentin-CV.pdf'
import { useState } from "react"

const ContactModal = () => {
	const { closeContactModal } = useView()
	const [emailCopied, setEmailCopied] = useState(false)

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("nicoflorentn@gmail.com")
		setEmailCopied(true)
		setTimeout(() => setEmailCopied(false), 2000)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
			onClick={closeContactModal}
		>
			<motion.div
				initial={{ scale: 0.9, opacity: 0, y: 20 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				exit={{ scale: 0.9, opacity: 0, y: 20 }}
				className="bg-[#1C1C1C] border border-zinc-800 w-full max-w-2xl shadow-2xl overflow-hidden font-consolas relative"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="flex justify-between items-center p-6 border-b border-zinc-800">
					<h2 className="text-3xl md:text-4xl text-primary font-rubik tracking-wider">CONTACT ME</h2>
					<button
						onClick={closeContactModal}
						className="text-secondary hover:text-white transition-colors text-2xl"
					>
						<FaTimes />
					</button>
				</div>

				{/* Content */}
				<div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-center">

					{/* Email Section */}
					<div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded border border-zinc-800/50">
						<span className="text-gray-400 text-sm md:text-base">nicoflorentn@gmail.com</span>
						<button
							onClick={handleCopyEmail}
							className={`text-2xl transition-colors ${emailCopied ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
							title="Copy email"
						>
							<FaCopy />
						</button>
					</div>

					{/* Divider for mobile */}
					<div className="md:hidden w-full h-[1px] bg-zinc-800"></div>

					{/* Resume Section */}
					<a
						href={resume}
						download={'NicolasFlorentin.pdf'}
						className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 transition-colors px-6 py-4 rounded text-gray-300 hover:text-white group"
					>
						<span>Download resume</span>
						<FaDownload className="text-xl group-hover:translate-y-1 transition-transform" />
					</a>
				</div>

				{/* Footer */}
				<div className="p-4 border-t border-zinc-800 text-right">
					<div className="flex items-center justify-end gap-2 text-primary/60 text-sm">
						<span>Glad to have you here</span>
						<FaHeart className="text-xs" />
					</div>
				</div>

			</motion.div>
		</motion.div>
	)
}

export default ContactModal
