import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
// import News from '../pages/News'
// import About from '../pages/About'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            {/* <Route path='/news' element={<News />}/>
            <Route path='/about' element={<About />}/> */}
        </Routes>     
    </div>
  )
}

export default AppRouter
