/* import React from 'react'*/

import Home from "./Home/Home"
import {Route, Routes} from "react-router-dom"
import TPacks from "./ToursPackages/tourPackage"
import Signup from "./components/Signup"
const App = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Packages' element={<TPacks/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </div>
  )
}
export default App