import { useRef, useState } from 'react'
import resume from '../../assets/documents/Nicolas-Florentin-CV.pdf';

const CvDownloadItem = ({ resetTime }) => {
	const [showConfirm, setShowConfirm] = useState(false)

	const timeOutRef = useRef(null)

	const toggleDownloadVisibility = () => {
		setShowConfirm(true)
		timeOutRef.current = setTimeout(() => {
			setShowConfirm(false)
		}, resetTime);
	}

	// const closeDownloadConfirmHandler = () => {
	// 	setShowConfirm(false)
	// 	timeOutRef.current && clearTimeout(timeOutRef.current)
	// }

	return (
		<div className='text-secondary transition-all duration-fast'>
			{!showConfirm ? <li className='hover:text-primary cursor-pointer' onClick={toggleDownloadVisibility}>RESUME</li> : <li>
				<span className='hover:text-primary'><a href={resume} download={'NicolasFlorentin.pdf'}>DOWNLOAD RESUME</a><span className='absolute ml-1'>?</span></span>
			</li>}
		</div>
	)
}

export default CvDownloadItem
