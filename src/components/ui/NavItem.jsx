import React from 'react';

const NavItem = ({ as: Component = 'li', className = '', children, ...props }) => {
	return (
		<Component
			className={`flex items-center justify-end w-fit transition-all duration-fast cursor-pointer hover:text-primary uppercase ${className}`}
			{...props}
		>
			{children}
		</Component>
	);
};

export default NavItem;
