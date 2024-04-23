import React from 'react';


const data = [
	{title: "Cезон №6", date: "5.03.2024", id: '1'},
	{title: "Cезон №5", date: "5.03.2024 — 20.04.2024", id: '2'},
	{title: "Cезон №4", date: "5.03.2024 — 20.04.2024", id: '3'},
	{title: "Cезон №3", date: "5.03.2024 — 20.04.2024", id: '4'},
	{title: "Cезон №2", date: "5.03.2024 — 20.04.2024", id: '5'},
	{title: "Cезон №1", date: "5.03.2024 — 20.04.2024", id: '6'},
]

const Season = ({
	seasonIsOpen, setSeasonIsOpen,
	activeSeason, setActiveSeason
}) => {
	
	const clickItem = id => {
		setActiveSeason(id);
		setTimeout(() => {
			setSeasonIsOpen(false);
		}, 350);
	} 
	
	return (<>
		<div data-visible={seasonIsOpen} className='season'>
			<div className='season__head'>
				<h2 className='season__title'>Выбор сезона</h2>
				<button onClick={() => setSeasonIsOpen(false)} data-btn='close'>
					<img src="icons/cross.svg" />
				</button>
			</div>
			<ul className='season__list'>
				{data.map((el, i) => 
					<li key={i} onClick={() => clickItem(i)} data-active={i === activeSeason} className='season__item'>
						<div data-name='decor-line'> <span /> </div>
						<h4 data-name="title">Cезон №6</h4>
						<h4 data-name="date">5.03.2024 — 20.04.2024</h4>
					</li>
				)}
			</ul>
		</div>
	</>);
}

export default Season;