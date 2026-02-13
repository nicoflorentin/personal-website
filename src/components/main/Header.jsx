const Header = () => {

	const year = new Date().getFullYear()

	return (
		<header className="pt-2 text-sm text-center font-inter font-light text-primary tracking-[2px] sm:text-xs">
			{year} - Buenos Aires 🇦🇷 Argentina
		</header>
	)
}

export default Header