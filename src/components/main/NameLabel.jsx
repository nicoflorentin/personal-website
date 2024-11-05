import { useEffect, useRef, useState } from 'react'



const NameLabel = () => {

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
			<h1 className="text-[16px] tracking-wide pl-2 font-inter">NICOLÁS FLORENTÍN</h1>
			<h2 className="font-rubik text-[53px] leading-[0.95em] tracking-[10px] mb-20 min-[320px]:text-[60px] lg:text-[80px]">
				FULL <br /> STACK <br /> DEV{barIsVisible ? '' : '/'}
			</h2>
		</div>
	)
}

export default NameLabel