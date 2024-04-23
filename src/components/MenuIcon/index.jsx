import React from 'react';
import cls from './style.module.scss';


const MenuIcon = ({dice=1, ...props}) => {

	const diceValid = Number(dice) >= 1 &&  Number(dice) <= 6 ? dice : 1;
	
	return (<>
		<button {...props} className={cls.menu}>
			<img src={`./icons/d${diceValid}.svg`} />
		</button>
	</>);
}

export default MenuIcon;