import React from 'react'
import HomeHero from '../Conponents/HomeHero'
import HomeProducts from '../Conponents/HomeProducts'
import HomeAbout from '../Conponents/HomeAbout'
import HomeNewBook from '../Conponents/HomeNewBook'
import HomeFeatured from '../Conponents/HomeFeatured'
import TestimonialSlider from '../Conponents/Testinomial'
import HomeLatest from '../Conponents/HomeLatest'

const Home = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section>
        <HomeHero />
      </section>

      {/* Products Section */}
      <section>
        <HomeProducts />
      </section>

      {/* Promo Banner Section */}
      <section
        className="w-full h-64 md:h-72 lg:h-80 bg-cover bg-no-repeat bg-center flex items-center justify-start px-6 md:px-12"
        style={{
          backgroundImage:
            "url('https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img-top-skybook1.jpg')",
        }}
      >
        <div className="text-white bg-black/40 p-4 rounded-md max-w-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            G. Meyer Books & Spiritual Traveler Press
          </h1>
          <p className="text-lg md:text-xl font-semibold">SALE UP TO 30% OFF</p>
        </div>
      </section>
      <section>
        <HomeAbout/>
      </section>
      <section>
        <HomeNewBook/>
      </section>
         <section
      className="relative py-12 px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://demo.towerthemes.com/tt_koparion/catalog/view/theme/tt_koparion1/image/bkg_static_middle.jpg')",
      }}
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* === Image 1 === */}
        <div className="w-full relative">
          <div className='absolute inset-0 hover:bg-black/40'></div>
          <img
            src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img1-middle-skybook1.jpg"
            alt="Promo 1"
            className="w-full object-cover"
          />
        </div>

        {/* === Image 2 === */}
        <div className="w-full relative">
          <div className='absolute inset-0 hover:bg-black/40'></div>
          <img
            src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img2-middle-skybook1.jpg"
            alt="Promo 2"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>    
    <section>
      <HomeFeatured/>
      </section>
      <section>
        <TestimonialSlider/>
      </section>
      <section>
        <HomeLatest/>
      </section>
      </div>
  )
}

export default Home
