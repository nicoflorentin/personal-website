const NavItem = ({ label = '', children, ...props }) => {
	return (
		<li className="flex items-center transition-all duration-fast cursor-pointer w-fit justify-end hover:text-primary"
			{...props}
		>
			{label}
			{children}
		</li>
	)
}

export default NavItem	