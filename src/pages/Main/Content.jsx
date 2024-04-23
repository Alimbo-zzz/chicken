import React from 'react';
import { Link } from 'react-router-dom';

const dices = [1,2,3,4,5,6];

const Content = (props) => {
	
	return (<>
		<div className='content'>
			
			<h2 className='content__title'>ЦЕХА</h2>
			<nav className='content__nav'>
				{dices.map(el => <Link  to="/table" key={el}> <img src={`icons/d${el}.svg`} /> </Link>)}				
			</nav>

			<div className='content__info'>
				<img data-name="icon" src="icons/d5.svg" />
				<p data-name="date">Посадка 28.04.2024г.</p>
				<p data-name="timer">Осталось 12 дней</p>
			</div>

			<button className='content__btn'>Режим администратора</button>
		</div>
	</>);
}

export default Content;