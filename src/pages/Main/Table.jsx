import React from 'react';



const data = [
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 0, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 1, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 15, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: 8, head: null, back: null, wing: null, date: new Date()},
	{death: 3, stack: null, head: 21, back: 33, wing: 16, date: new Date()},
	{death: 3, stack: null, head: 21, back: 33, wing: 16, date: new Date()},
	{death: 3, stack: null, head: 21, back: 33, wing: 16, date: new Date()},
	{death: 3, stack: null, head: 21, back: 33, wing: 16, date: new Date()},
	{death: 3, stack: null, head: 21, back: 33, wing: 16, date: new Date()},
]

const Table = (props) => {


	const getValue = (value) => typeof value !== 'number' ? '—' : value;
	
	return (<>
		<div className='table'>
			<div data-name='head' className="table__row">
				<div className='table__item' data-name="num">№</div>
				<div className='table__item' data-name="death">Падёж</div>
				<div className='table__item' data-name="stack">10 цыплят</div>
				<div className='table__item' data-name="head">Голова</div>
				<div className='table__item' data-name="back">Спина</div>
				<div className='table__item' data-name="wing">Крыло</div>
			</div>

			{data.map((el, i) => <div className='table__row' key={i}>
				<div className='table__item' data-name="num">{i + 1}</div>
				<div className='table__item' data-name="death"> {getValue(el?.death)} </div>
				<div className='table__item' data-name="stack"> {getValue(el?.stack)} </div>
				<div className='table__item' data-name="head"> {getValue(el?.head)} </div>
				<div className='table__item' data-name="back"> {getValue(el?.back)} </div>
				<div className='table__item' data-name="wing"> {getValue(el?.wing)} </div>
			</div>)}
		</div>
	</>);
}

export default Table;