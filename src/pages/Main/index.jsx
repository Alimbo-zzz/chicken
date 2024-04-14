import React, {useState} from 'react';
import {Header, Menu, Table, Controlls} from './components';
import './styles/index.scss';

const Main = (props) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	let menuOps = {
		menuIsOpen, setMenuIsOpen
	}

	
	return (<>
		<div className='main'>
			<Header {...menuOps}/>
			<Controlls/>
			<Table/>
		</div>
		<Menu {...menuOps}/>
	</>);
}

export default Main;