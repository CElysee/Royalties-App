import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'

const Routers = () => {
  return (
   <Routes>
    {/* <Route path='/' element={<Navigate to='/'/>} /> */}
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<AboutUs />} />
    <Route path='/feature' element={<AboutUs />} />
    <Route path='/contact' element={<ContactUs />} />
   </Routes>
  )
}

export default Routers