import { useEffect, useRef, useState } from 'react'



import { useTranslation, Trans } from 'react-i18next'; // Add Trans to import

const NameLabel = () => {
	const { t } = useTranslation();
	const [barIsVisible, setBarIsVisible] = useState(false);
	const intervalRef = useRef(null);

	useEffect(() => {
		intervalRef.current = setInterval(() => setBarIsVisible(prev => !prev), 2000);
		return () => {
			clearInterval(intervalRef.current)
			intervalRef.current = null
		}
	}, [])
	return (
		<div className="text-primary">
			<h1 className="text-[16px] tracking-wide pl-1 sm:pl-2 font-inter">NICOLÁS FLORENTÍN</h1>
			<h2 className="font-rubik leading-[0.95em] md:tracking-[5px] mb-20 text-[40px] lg:text-[80px] sm:text-[53px]">
				FRONTEND <br /> DEV{barIsVisible ? '' : '/'}
			</h2>
			<p className="max-w-xs text-[12px] font-medium tracking-[2px] opacity-70 font-inter uppercase sm:mt-[-70px] mt-[-80px] mb-20">
				{t('dev_description')}
			</p>
		</div>
	)
}

export default NameLabel