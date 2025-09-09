import React from 'react'
import { FiFacebook,  FiTwitter } from 'react-icons/fi'
import { FaSearchPlus } from 'react-icons/fa'


const HomeAbout = () => {
  const CardDetail = [
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/10-600x770.jpg',
      header: 'Bess Yoga Shorts',
      price: '$74.00',
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/4-600x770.jpg',
      header: 'Rival Field Messengers',
      price: '$1,202.00',
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/15-600x770.jpg',
      header: 'The Eleven Questions',
      price: '$98.00',
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/9-600x770.jpg',
      header: 'Shaping Humanity',
      price: '$242.00',
    },
  ]

  const Cards = ({ url, header, price }) => {
    return (
      <div className="w-full max-w-xs mx-auto text-center space-y-3 cursor-pointer group">
      {/* Image Container with Hover Zoom and Icon Overlay */}
      <div className="relative overflow-hidden rounded-md shadow-md">
        <img
          src={url}
          alt={header}
          className="w-full h-[200px] mt-4 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay with Zoom Icon */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-[#F07C29] text-white rounded-full p-3 text-xl">
            <FaSearchPlus />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <h1 className="text-sm font-bold text-gray-800">{header}</h1>
      <p className="text-[#F07C29] text-lg font-semibold">{price}</p>
    </div>
    )
  }

  return (
    <div className="py-10 px-5 md:px-16 bg-white">
      <h1 className="text-2xl font-bold text-start ">AUTHOR BEST SELLING</h1>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-10 justify-around items-center">
        {/* Left - Author Info */}
        <div className="space-y-4 text-center md:text-right">
          <h1 className="text-5xl font-bold text-[#F07C29]">J. K. <br /> Rowling</h1>
          <p className="uppercase text-sm text-gray-500 tracking-widest">Categories: Books, Audiobooks</p>
          <p className="text-gray-700 leading-relaxed">
            Vestibulum porttitor iaculis gravida. Praesent vestibulum varius placerat.
            Cras tempor congue neque, id aliquam orci finibus sit amet. Fusce at facilisis arcu.
            Donec aliquet nulla id turpis semper, a bibendum metus vulputate. Suspendisse potenti.
          </p>
         <div className="flex justify-center md:justify-end gap-4 mt-4">
  {/* Facebook */}
  <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center text-gray-700 transition-all duration-300 hover:bg-[#F07C29] hover:text-white hover:scale-110">
    <FiFacebook />
  </div>
  
  {/* Twitter */}
  <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center text-gray-700 transition-all duration-300 hover:bg-[#F07C29] hover:text-white hover:scale-110">
    <FiTwitter />
  </div>
</div>
        </div>

        {/* Center - Image */}
        <div>
          <img
            src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img-author-best.jpg"
            alt="Author Visual"
            className="w-full h-[100vh] rounded-md shadow-md"
          />
        </div>

        {/* Right - Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {CardDetail.map((item, index) => (
            <Cards key={index} url={item.url} header={item.header} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
