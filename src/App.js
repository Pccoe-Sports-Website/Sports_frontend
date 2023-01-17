import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Login from './Components/Login'
import AdminPanel from './Components/adminpanel'
import Register from './Components/register'
import ThankYou from './Components/thankYou'
function App() {
  return (
   <>
   <Navbar />
   <div>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Register />} />
    <Route path="/admin-panel" element={<AdminPanel />} />
    <Route path="/thank-you" element={<ThankYou />} />
   </Routes>
   </div></> 
  )
}

export default App