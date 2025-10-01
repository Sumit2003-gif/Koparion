import React, { useRef, useState } from 'react';
import Cards from "../Conponents/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const bookList1 = [
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/9-600x770.jpg", header: "Voyage Yoga Bags", price: "$242.00", rating: 3 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/6-600x770.jpg", header: "Sprite Yoga Companion Kits", price: "$98.00", rating: 2 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/4-600x770.jpg", header: "Rival Field Messengers", price: "$1,202.00", rating: 3 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/2-600x770.jpg", header: "Maxima Drawstring Shorts", price: "$602.00", rating: 3 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/17-600x770.jpg", header: "Joust Duffle Bags", price: "$104.00", rating: 3 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/15-600x770.jpg", header: "Endeavor Daytrip Backpacks", price: "$98.00", rating: 3 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/7-600x770.jpg", header: "Strive Shoulder Packs", price: "$337.00", rating: 5 },
];

const bookList2 = [
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/5-600x770.jpg", header: "Savvy Shoulder Totes", price: "$2000.00", rating: 4 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/3-600x770.jpg", header: "Radiant Tees", price: "$241.00", rating: 3 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/18-600x770.jpg", header: "Karmen Yoga Pants", price: "$116.00", rating: 5 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/16-600x770.jpg", header: "Fusion Backpacks", price: "$98.00", rating: 4 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/14-600x770.jpg", header: "Driven Backpacks", price: "$92.00", rating: 2 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/12-600x770.jpg", header: "The Things They Carried", price: "$132.00", rating: 4 },
  { url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/11-600x770.jpg", header: "Blue Like Jazz", price: "$110.00", rating: 3 },
];

const HomeNewBook = () => {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  // Track hovered card index
  const [hoveredIndex1, setHoveredIndex1] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);

  const handleNext = () => {
    swiper1Ref.current?.slideNext();
    swiper2Ref.current?.slideNext();
  };

  const handlePrev = () => {
    swiper1Ref.current?.slidePrev();
    swiper2Ref.current?.slidePrev();
  };

  return (
    <div className="px-4 py-6 md:py-8 max-w-[1300px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">NEW BOOKS</h1>

      {/* === First Swiper === */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiper1Ref.current = swiper)}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 }
          }}
          modules={[Navigation]}
          className="mb-10 md:mb-12"
        >
          {bookList1.map((book, index) => (
            <SwiperSlide key={index}>
              <Cards
                {...book}
                isHovered={hoveredIndex1 === index}
                onHover={() => setHoveredIndex1(index)}
                onLeave={() => setHoveredIndex1(null)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Shared Navigation Buttons === */}
      <div className="flex justify-center items-center gap-6 my-8 md:my-10">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-700 transition shadow-md"
          aria-label="Previous books"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-orange-600 text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-orange-500 transition shadow-md"
          aria-label="Next books"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* === Second Swiper === */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiper2Ref.current = swiper)}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 }
          }}
          modules={[Navigation]}
          className='mt-8 md:mt-10'
        >
          {bookList2.map((book, index) => (
            <SwiperSlide key={index}>
              <Cards
                {...book}
                isHovered={hoveredIndex2 === index}
                onHover={() => setHoveredIndex2(index)}
                onLeave={() => setHoveredIndex2(null)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeNewBook;