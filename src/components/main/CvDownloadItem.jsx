import { useView } from '../../context/ViewContext';
// import resume from '../../assets/documents/Nicolas-Florentin-CV.pdf';

const CvDownloadItem = ({ resetTime }) => {
	const { openContactModal } = useView()

	const toggleDownloadVisibility = () => {
		// Wait for the hover/click transition to complete (200ms)
		setTimeout(() => {
			openContactModal()
		}, 200)
	}

	return (
		<div className='text-secondary transition-all duration-fast'>
			<li className='hover:text-primary cursor-pointer' onClick={toggleDownloadVisibility}>CONTACT</li>
		</div>
	)
}

export default CvDownloadItem
