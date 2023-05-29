import React from 'react'
import Navbar from '../Components/HomePageComponent/Navbar'
import { Outlet } from 'react-router-dom'
import Header from '../Components/HomePageComponent/Header'
import Footer from '../Components/HomePageComponent/Footer'

const FixedComponent = () => {
  return (
    <div>
     <Header/>
     <Navbar/>
     <Outlet/>
     <Footer/> 

    </div>
  )
}

export default FixedComponent