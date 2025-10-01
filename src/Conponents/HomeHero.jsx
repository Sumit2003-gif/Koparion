import React from 'react'
import { AiFillWallet } from 'react-icons/ai'
import { FiCalendar, FiPhoneCall, FiTruck } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const HomeHero = () => {
  const features = [
    {
      icon: <FiTruck className="text-3xl" />,
      title: 'Free shipping',
      description: 'On all orders over $500',
    },
    {
      icon: <FiCalendar className="text-3xl" />,
      title: 'Money back guarantee',
      description: '100% satisfaction guarantee',
    },
    {
      icon: <AiFillWallet className="text-3xl" />,
      title: 'Cash on delivery',
      description: 'Secure payment options',
    },
    {
      icon: <FiPhoneCall className="text-3xl" />,
      title: 'Help & Support',
      description: 'Call us: +0123.4567.89',
    },
  ]

  const slides = [
    {
      title: 'Huge Sale',
      subtitle: 'Koparion Collection',
      description: 'Now Starting At £99.00',
      image: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/slider/slider1-skybook1-1920x599.jpg',
    },
    {
      title: 'Get Your',
      subtitle: 'Books In Order',
      description: 'Professional organization solutions',
      image: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/slider/slider2-skybook1-1920x599.jpg',
    },
  ]

  return (
    <div className="relative">
      {/* Features Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-6 px-4 shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-orange-500 mb-2 p-3 bg-orange-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-center">{feature.title}</h3>
              <p className="text-sm text-gray-600 text-center mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          loop={true}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                    <div className="max-w-2xl space-y-4 md:space-y-6">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 leading-tight">
                        {slide.subtitle}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                        {slide.description}
                      </p>
                      <button className="mt-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Pagination */}
          <div className="swiper-pagination absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10" />
        </Swiper>
      </div>
    </div>
  )
}

export default HomeHero