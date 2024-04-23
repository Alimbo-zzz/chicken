import React, {useState, useEffect} from 'react';

const Intro = ({scroll}) => {
	const [isLoad, setIsLoad] = useState(false);


	useEffect(()=>{
		setTimeout(() => {
			setIsLoad(true)
		}, 200);
	}, [])

	
	return (<>
		<div className='intro'>
			<div data-load={isLoad} className='intro__title'>
				<img src='icons/MAM.svg' />
				<h1>PRODUCT</h1>
			</div>

			<div data-load={isLoad} className='intro__logo'>
				<img src="icons/logo.svg" />
				<span data-line='1'/>
				<span data-line='2'/>
			</div>

			<button onClick={scroll} data-load={isLoad}  className='intro__arrow'> <img src="icons/arrow.svg" /> </button>
		
			<div data-load={isLoad} className='intro__decor'>
				<img data-decor='left' src="images/decor-left.png" />
				<img data-decor='right' src="images/decor-right.png" />
			</div>
		</div>
	</>);
}

export default Intro;