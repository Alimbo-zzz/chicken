import React from 'react';

const data = [1,2,3,4,5,6];

const Menu = ({ menuIsOpen, setMenuIsOpen, activeGild, setActiveGild }) => {


	function closeMenu() {setMenuIsOpen(false)};
	const clickItem = (id) => {setActiveGild(id); setMenuIsOpen(false)}


	return (<>
		<div onClick={closeMenu} data-open={menuIsOpen} className='menu'>
			<div data-open={menuIsOpen} className="menu__wrap" onClick={e => e.stopPropagation()}>
				<h4 className='menu__title'>Выбор цеха</h4>
				<ul className='menu__list'>
					{data.map(el => 
						<li onClick={e => clickItem(el)} data-active={activeGild === el} key={el} className='menu__item'>
							<img src={`icons/d${el}.svg`} />
						</li>
					)}
				</ul>
			</div>			
		</div>
	</>);
}

export default Menu;