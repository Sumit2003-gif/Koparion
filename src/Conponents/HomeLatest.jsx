import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const HomeLatest = () => {
     const swiperRef = useRef(null);
  const blogCards = [
    {
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328f6344",
      date: "30",
      month: "OCT",
      title: "Summer House Guests - Featuring K250 Oasis Brewer",
      description:
        "We’re so excited! Our friend Kate from Domestikated Life is back and sharing gorgeous photos...",
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      date: "12",
      month: "SEP",
      title: "How to Style Your Coffee Corner Like a Pro",
      description:
        "Get cozy and learn how to design the perfect morning coffee setup with our favorite decor ideas...",
    },
    {
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      date: "05",
      month: "AUG",
      title: "Book Lovers Rejoice: Our Top 5 Cozy Reads This Fall",
      description:
        "Whether you're into thrillers or romance, we've got you covered with this season’s best books to curl up with...",
    },
    {
      img: "https://images.unsplash.com/photo-1606788075761-38e4fd06cd4b",
      date: "18",
      month: "NOV",
      title: "Why You Should Start Journaling Today",
      description:
        "Discover the mental health benefits of journaling and how to build a consistent writing habit...",
    },
    {
      img: "https://images.unsplash.com/photo-1589834381259-10cbf3cc5f3e",
      date: "22",
      month: "JUL",
      title: "Home Office Hacks for Maximum Productivity",
      description:
        "Simple changes to your workspace can help you stay focused, organized, and stress-free while working remotely...",
    },
    {
      img: "https://images.unsplash.com/photo-1532634896-26909d0d4b9f",
      date: "09",
      month: "DEC",
      title: "DIY Gift Ideas for Book Lovers",
      description:
        "From personalized bookmarks to custom book sleeves, surprise your favorite reader with a handmade gift this holiday...",
    },
  ];

  const Cards = ({ img, date, month, title, description }) => {
    return (
      <div className="max-w-md bg-white shadow-lg rounded overflow-hidden mx-auto">
        <div className="relative">
          <img src={img} alt="Card" className="w-full h-64 object-cover" />
          <div className="absolute top-2 left-2 bg-white px-3 py-2 text-center">
            <p className="text-xl font-semibold leading-none">{date}</p>
            <p className="text-xs uppercase text-gray-500">{month}</p>
          </div>
        </div>

        <div className="p-6 text-center">
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-600 text-base mb-4">{description}</p>

          <button className="mt-2 px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 relative">
      <h1 className="text-3xl font-bold mb-6 text-center">LATEST NEWS</h1>

      {/* Custom buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-300 rounded"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &lt;
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-300 rounded"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &gt;
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogCards.map((item, index) => (
          <SwiperSlide key={index}>
            <Cards
              img={item.img}
              date={item.date}
              month={item.month}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeLatest;
