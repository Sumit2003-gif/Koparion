import { useState } from 'react'
import './App.css'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Conponents/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Conponents/Footer'
import SocialIcons from './Conponents/Social'
import Blog from './Pages/Blog'
import SingleBlog from './Conponents/SingleBlog'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="w-full py-[3%] px-6 bg-white shadow-md flex items-center justify-between">
      
      {/* Left: Search */}
      <div className="flex items-center w-1/4 max-w-sm">
        <input
          type="text"
          placeholder="Search entire store here ..."
          className="w-full px-4 py-2  border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="bg-orange-500 text-white px-4 py-3 rounded-r-md hover:bg-orange-600">
          <FiSearch />
        </button>
      </div>

      {/* Center: Logo */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://demo.towerthemes.com/tt_koparion/image/catalog/logo/logo.png"
          alt="Koparion Logo"
          className="h-10 object-contain"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6 text-sm">
        <div className='grid gap-1'>
        <div className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 cursor-pointer">
          <AiFillHeart className="text-xl" />
          <span>Wish List (0)</span>
        </div>

        <div className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 cursor-pointer">
          <BiGitCompare className="text-xl" />
          <span>My Compare</span>
        </div>
</div>
        <div className="relative flex items-center gap-2 text-gray-800 hover:text-orange-500 cursor-pointer">
          <FiShoppingBag className="text-6xl" />
          <div className="absolute -bottom-3  left-1/4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">
            0
          </div>
          <div className="ml-2">
            <p className="text-xl font-semibold">MY CART</p>
            <p className="text-lg text-gray-500">0.00</p>
          </div>
        </div>
      </div>
    </header>
    <Navbar/>
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
