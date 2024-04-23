import {Main, Table} from '@/pages';
import {AnimatePresence} from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';



function App() {
	const location = useLocation();


  return (
    <>
      <div className='wrapper'>        
        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Main/>}/>
            <Route path='table' element={<Table/>}/>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
