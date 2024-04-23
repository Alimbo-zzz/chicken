import React from 'react';
import {LogoIcon, MenuIcon} from '@/components';
import { Link } from 'react-router-dom';

const Header = ({setMenuIsOpen, activeGild, setSeasonIsOpen}) => {

	const openMenu = (e) => {
		e.stopPropagation();
		setMenuIsOpen(true);
	};

	return (<>
		<header className='header'>
			<div className="container">
				<Link to="/"><LogoIcon/></Link>
				<button onClick={() => setSeasonIsOpen(true)} className='header__season'>Сезон №1</button>
				<MenuIcon dice={activeGild} onClick={openMenu}  />
			</div>
		</header>
	</>);
}

export default Header;