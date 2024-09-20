import { useRef, useState } from 'react'
import resume from '../../assets/documents/cv.pdf';

const CvDownloadItem = () => {
	const [showConfirm, setShowConfirm] = useState(false)

	const timeOutRef = useRef(null)

	const toggleDownloadVisibility = () => {
		setShowConfirm(true)
		timeOutRef.current = setTimeout(() => {
			setShowConfirm(false)
		}, 10000);
	}

	const closeDownloadConfirmHandler = () => {
		setShowConfirm(false)
		timeOutRef.current && clearTimeout(timeOutRef.current)
	}

	return (
		<div>
			{!showConfirm ? <li onClick={toggleDownloadVisibility}>CV</li> : <li>
				<span className='hover:text-primary'><a href={resume} download={'NicolasFlorentin.pdf'}>DOWNLOAD RESUME</a></span>
				<span className='absolute pl-2 hover:text-red-400 hover:scale-[1.1] text-secondary' onClick={closeDownloadConfirmHandler}>✖</span>
			</li>}

		</div>
	)
}

export default CvDownloadItem
