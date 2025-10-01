import React from 'react'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
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
      <div className="w-full mx-auto text-center space-y-3 cursor-pointer group">
        {/* Image Container with Hover Zoom and Icon Overlay */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img
            src={url}
            alt={header}
            className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay with Zoom Icon */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#F07C29] text-white rounded-full p-3 text-xl transform transition-transform duration-300 group-hover:scale-110">
              <FaSearchPlus />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <h3 className="text-sm sm:text-base font-bold text-gray-800 group-hover:text-[#F07C29] transition-colors duration-300">{header}</h3>
        <p className="text-[#F07C29] text-base sm:text-lg font-semibold">{price}</p>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-6 md:mb-10 lg:mb-14">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 relative inline-block">
            AUTHOR BEST SELLING
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F07C29] to-amber-500 rounded-full"></span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left - Author Info */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-right order-1 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F07C29] leading-tight">
              J. K. <br /> Rowling
            </h1>
            <p className="uppercase text-xs md:text-sm text-gray-500 tracking-widest">
              Categories: Books, Audiobooks
            </p>
            <p className="text-gray-700 leading-relaxed text-justify lg:text-right text-sm md:text-base">
              Vestibulum porttitor iaculis gravida. Praesent vestibulum varius placerat.
              Cras tempor congue neque, id aliquam orci finibus sit amet. Fusce at facilisis arcu.
              Donec aliquet nulla id turpis semper, a bibendum metus vulputate. Suspendisse potenti.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-end gap-3 md:gap-4 pt-2">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex justify-center items-center text-gray-700 transition-all duration-300 hover:bg-[#F07C29] hover:text-white hover:scale-110"
                aria-label="Facebook"
              >
                <FiFacebook className="text-base md:text-lg" />
              </a>
              
              {/* Twitter */}
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex justify-center items-center text-gray-700 transition-all duration-300 hover:bg-[#F07C29] hover:text-white hover:scale-110"
                aria-label="Twitter"
              >
                <FiTwitter className="text-base md:text-lg" />
              </a>
            </div>
          </div>

          {/* Center - Image */}
          <div className="order-2 lg:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img-author-best.jpg"
                alt="Author Visual"
                className="w-full h-48 md:h-64 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Right - Product Cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 sm:gap-6 order-3 lg:order-3">
            {CardDetail.map((item, index) => (
              <Cards key={index} url={item.url} header={item.header} price={item.price} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout