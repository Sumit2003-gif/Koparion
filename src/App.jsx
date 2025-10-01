import { useState } from 'react'
import './App.css'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Conponents/Footer'
import SocialIcons from './Conponents/Social'
import Blog from './Pages/Blog'
import SingleBlog from './Conponents/SingleBlog'
import Contact from './Pages/Contact'
import Header from './Conponents/Navbar'
import ScrollToTop from './Conponents/ScroltoTop'

function App() {

  return (
    <>
    <ScrollToTop/>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>

      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='' element={}/> */}
    </Routes>
    <SocialIcons/>
    <Footer/>
    </>
  )
}

export default App
