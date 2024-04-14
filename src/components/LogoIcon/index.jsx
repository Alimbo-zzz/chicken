import React from 'react';
import logo_img from './logo.svg';
import cls from './style.module.scss'

const LogoIcon = (props) => {
	
	return (<>
		<div className={cls.logo}>
			<img src={logo_img}/>
		</div>
	</>);
}

export default LogoIcon;