import React from 'react';
import cls from './style.module.scss';
import cross_svg from './cross.svg';
import menu_svg from './menu.svg';

const MenuIcon = ({open, ...props}) => {
	
	return (<>
		<button {...props} data-active={open} className={cls.menu}>
			<img data-name="cross" src={cross_svg} />
			<img data-name="menu" src={menu_svg} />
		</button>
	</>);
}

export default MenuIcon;