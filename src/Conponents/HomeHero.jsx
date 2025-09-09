import React from 'react'
import { AiFillWallet } from 'react-icons/ai'
import { FiCalendar, FiPhoneCall, FiTruck } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const HomeHero = () => {
  const Top = [
    {
      icon: <FiTruck />,
      Headers: 'Free shipping item',
      text: 'For all orders over $500',
    },
    {
      icon: <FiCalendar />,
      Headers: 'Money back guarantee',
      text: '100% money back guarantee',
    },
    {
      icon: <AiFillWallet />,
      Headers: 'Cash on delivery',
      text: 'Lorem ipsum dolor amet consectetur',
    },
    {
      icon: <FiPhoneCall />,
      Headers: 'Help & Support',
      text: 'Call us : +0123.4567.89',
    },
  ]

  const slides = [
    {
      header: 'Huge Sale',
      header2: 'Koparion',
      text: 'Now Starting At £99.00',
      img: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/slider/slider1-skybook1-1920x599.jpg',
    },
    {
      header: 'We Can Help Get Your',
      header2: 'Books In Order',
      img: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/slider/slider2-skybook1-1920x599.jpg',
    },
  ]

  return (
    <div className="relative">
      {/* Top Icons Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white py-6 px-4 text-center shadow">
        {Top.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center space-y-2">
            <div className="text-3xl text-orange-500">{item.icon}</div>
            <h4 className="font-semibold text-lg">{item.Headers}</h4>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: '.tailwind-progressbar',
            type: 'progressbar',
          }}
          loop={true}
          className="w-full h-[400px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[90vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="ml-8 md:ml-20 text-white max-w-xl space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
                    {slide.header}
                  </h1>
                  {slide.header2 && (
                    <h1 className="text-5xl md:text-6xl font-bold text-black">
                      {slide.header2}
                    </h1>
                  )}
                  <p className="text-xl md:text-2xl text-gray-100">{slide.text}</p>
                  <button className="bg-[#F07C29] hover:bg-orange-600 text-white px-6 py-3 rounded mt-2 text-lg font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Tailwind Progress Bar */}
          <div className="tailwind-progressbar absolute bottom-0 left-0 w-full h-[5px] bg-orange-200" />
        </Swiper>
      </div>
    </div>
  )
}

export default HomeHero
