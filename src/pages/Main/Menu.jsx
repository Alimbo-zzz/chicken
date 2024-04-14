import React, {useState, useEffect} from 'react';

const data = [
	{name: 'Цех №1', id: '1'},
	{name: 'Цех №2', id: '2'},
	{name: 'Цех №3', id: '3'},
	{name: 'Цех №4', id: '4'},
	{name: 'Цех №5', id: '5'},
	{name: 'Цех №6', id: '6'},
];

const Menu = ({onChange, menuIsOpen, setMenuIsOpen}) => {
	const [activeСompany, setActiveСompany] = useState("1");
	
	useEffect(()=>{
		if(typeof onChange === 'function') onChange(activeСompany);
	}, [activeСompany])
	

	useEffect(()=>{
		document.addEventListener('click', closeMenu);
		return () => {
			document.removeEventListener('click', closeMenu)
		}
	}, [])

	function closeMenu() {setMenuIsOpen(false)};
	const clickItem = (id) => {setActiveСompany(id); setMenuIsOpen(false)}


	return (<>
		<div onClick={e => e.stopPropagation()} data-open={menuIsOpen} className='menu'>
			<h4 className='menu__title'>Список цехов</h4>
			<ul className='menu__list'>
				{data.map((el, i) => 
					<li onClick={e => clickItem(el.id)} data-active={activeСompany === el.id} key={el.id} className='menu__item'>
						{el.name}
					</li>
				)}
			</ul>
		</div>
	</>);
}

export default Menu;