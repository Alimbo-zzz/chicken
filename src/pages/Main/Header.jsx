import React from 'react';
import {LogoIcon, MenuIcon} from '@/components';

const Header = ({menuIsOpen, setMenuIsOpen}) => {

	const toggleMenu = (e) => { e.stopPropagation(); setMenuIsOpen(prev => !prev)};

	return (<>
		<header className='header'>
			<div className="container">
				<LogoIcon/>
				<h3 className='header__title'>Цех №1</h3>
				<MenuIcon open={menuIsOpen} onClick={toggleMenu}/>
			</div>
		</header>
	</>);
}

export default Header;