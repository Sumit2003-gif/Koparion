import React from "react";
import HomeHero from "../Conponents/HomeHero";
import HomeProducts from "../Conponents/HomeProducts";
import HomeAbout from "../Conponents/HomeAbout";
import HomeNewBook from "../Conponents/HomeNewBook";
import HomeFeatured from "../Conponents/HomeFeatured";
import TestimonialSlider from "../Conponents/Testinomial";
import HomeLatest from "../Conponents/HomeLatest";

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

      <section
        className="w-full h-64 md:h-72 lg:h-80 bg-cover bg-no-repeat bg-center flex items-center justify-start px-6 md:px-12 relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img-top-skybook1.jpg')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="relative z-10 text-white max-w-xl transform transition-transform duration-500 hover:scale-[1.02]">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-orange-500 shadow-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
              G. Meyer Books & Spiritual Traveler Press
            </h1>
            <div className="flex items-center gap-3">
              <p className="text-xl md:text-2xl font-bold">
                SALE UP TO 30% OFF
              </p>
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                LIMITED TIME
              </span>
            </div>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4 hidden md:block">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span className="h-px w-8 bg-white/50"></span>
            <span>Special Offer</span>
          </div>
        </div>
      </section>
      <section>
        <HomeAbout />
      </section>
      <section>
        <HomeNewBook />
      </section>
      <section
        className="relative py-8 md:py-12 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://demo.towerthemes.com/tt_koparion/catalog/view/theme/tt_koparion1/image/bkg_static_middle.jpg')",
        }}
      >
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* === Image 1 === */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            <img
              src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img1-middle-skybook1.jpg"
              alt="Promo 1"
              className="w-full object-cover h-64 md:h-auto rounded-lg shadow-lg"
            />

            {/* Mobile overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden flex flex-col justify-end p-5 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-2">
                New Arrivals
              </h3>
              <p className="text-white/90 text-sm mb-3">
                Discover our latest collection of books
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm w-32 transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* === Image 2 === */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            <img
              src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img2-middle-skybook1.jpg"
              alt="Promo 2"
              className="w-full object-cover h-64 md:h-auto rounded-lg shadow-lg"
            />

            {/* Mobile overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden flex flex-col justify-end p-5 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-2">
                Special Offers
              </h3>
              <p className="text-white/90 text-sm mb-3">
                Get the best deals on your favorite books
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm w-32 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <HomeFeatured />
      </section>
      <section>
        <TestimonialSlider />
      </section>
      <section>
        <HomeLatest />
      </section>
    </div>
  );
};

export default Home;
