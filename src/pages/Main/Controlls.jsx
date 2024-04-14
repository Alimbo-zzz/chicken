import React, {useState, useEffect} from 'react';
import {unixData} from '@/scripts';

const Controlls = (props) => {
	const [selectValue, setSelectValue] = useState("id-1");

	const selectData = [
		{label: "Посадка №1", value: "id-1"},
		{label: "Посадка №2", value: "id-2"},
		{label: "Посадка №3", value: "id-3"},
		{label: "Посадка №4", value: "id-4"},
		{label: "Посадка №5", value: "id-5"},
	];

	const selectPreview = selectData.find(el => el.value === selectValue)?.label;
	const date = `${unixData(new Date()).num.date} ${unixData(new Date()).made.ru.contextMonth} ${unixData(new Date()).num.year}г.`;
	

	return (<>
		<div className='controlls'>
			<div className="container">
				<div className='controlls__select'>{selectPreview}</div>
				<span className='controlls__date'>Дата посадки: {date}</span>
			</div>
		</div>
	</>);
}

export default Controlls;