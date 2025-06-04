
const PageControl = () => {

	const Square = ({ selected }) => {

		const isSelectedStyles = () => selected ? 'bg-slate-500' : 'bg-slate-900'

		return (
			<div className={`${isSelectedStyles()} p-3 rounded-sm`}></div>
		)
	}


	return (
		<div className="text-white flex gap-3 m-2">
			<Square />
			<Square />
			<Square selected />
			<Square />
		</div>
	)
}

export default PageControl