import React, {useState, useEffect, useRef} from 'react';
import {Content, Intro} from './components';
import './styles/index.scss';
import {Animate} from '@/contexts';


const Main = (props) => {
	const mainRef = useRef();

	const scrollContent = () => {		
		mainRef.current.scrollTo({
			top: mainRef.current.scrollHeight,
			behavior: "smooth",
		});
	}
	
	return (<>
		<Animate>
			<div ref={mainRef} className='main'>
				<div className="main__section"><Intro scroll={scrollContent}/></div>
				<div className="main__section"><Content/></div>
			</div>
		</Animate>		
	</>);
}

export default Main;