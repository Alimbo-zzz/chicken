import React, {useState} from 'react';
import {Header, Menu, Table, Season} from './components';
import './styles/index.scss';
import {Animate} from '@/contexts';

const TablePage = (props) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [activeGild, setActiveGild] = useState(1);
	const [seasonIsOpen, setSeasonIsOpen] = useState(false);
	const [activeSeason, setActiveSeason] = useState(0);

	let ops = {
		menuIsOpen, setMenuIsOpen, 
		activeGild, setActiveGild,
		seasonIsOpen, setSeasonIsOpen,
		activeSeason, setActiveSeason
	}
	
	return (<>
		<Animate>
			<div className='table-page'>
				<Header {...ops} />
				<Table/>
			</div>
			<Menu {...ops}/>
			<Season {...ops} />
		</Animate>
	</>);
}

export default TablePage;