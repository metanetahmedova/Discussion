import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import FixedComponent from './Router/FixedComponent'
import HomePage from './Pages/HomePage'
import CulturePage from './Pages/CulturePage'
import PoliticsPage from './Pages/PoliticsPage'
import MemesPage from './Pages/MemesPage'
import SportsPage from './Pages/SportsPage'
import BoxedPage from './Pages/BoxedPage'
import ReviewsPage from './Pages/ReviewsPage'
import FeaturedPage from './Pages/FeaturedPage'
import SportPage from './Pages/SportPage'
import FashionPage from './Pages/FashionPage'
import TechnologyPage from './Pages/TechnologyPage'


const App = () => {
  return (
    <div>
       <Routes>
           <Route path="/" element={<FixedComponent/>}>
            <Route index={true} element={<HomePage/>}/>
            <Route path="/culture" element={<CulturePage/>}/>
            <Route path="/politics" element={<PoliticsPage/>}/>
            <Route path="/memes" element={<MemesPage/>}/>
            <Route path="/sports" element={<SportsPage/>}/>
            <Route path="/boxed" element={<BoxedPage/>}/>
            <Route path="/reviews" element={<ReviewsPage/>}/>
            <Route path="/featured" element={<FeaturedPage/>}/>
            <Route path="/sport" element={<SportPage/>}/>
            <Route path="/fashion" element={<FashionPage/>}/>
            <Route path="/technology" element={<TechnologyPage/>}/>
          
            

           </Route>
       </Routes>

    </div>
  )
}

export default App