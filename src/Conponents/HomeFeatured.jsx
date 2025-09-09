import React from 'react';

const HomeFeatured = () => {
  const Most = [
    {
      url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/15-600x770.jpg",
      header: "Endeavor DayTrip Backpacks",
      price: "$98.00",
      rating: 3,
    },
    {
      url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/13-600x770.jpg",
      header: "Crown Summit Backpacks",
      price: "$1,202.00",
      rating: 1,
    },
    {
      url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/14-600x770.jpg",
      header: "Driven Backpacks",
      price: "$92.00",
      rating: 2,
    },
  ];

  const Featured = [
    {
      url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/11-600x770.jpg",
      header: "Chaz Kangeroo Hoodies",
      price: "$80.00",
      rating: 4,
    },
    {
      url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/13-600x770.jpg",
      header: "Crown Summit Backpacks",
      price: "$1,202.00",
      rating: 1,
    },
    {
      url: "https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/12-600x770.jpg",
      header: "Complete Track Totes",
      price: "$86.00",
      rating: 5,
    },
  ];

  const Card = ({ url, rating, header, price }) => {
    return (
      <div className="flex items-start space-x-4 py-4 border-b last:border-none">
        <img
          src={url}
          alt={header}
          className="w-16 h-auto object-cover rounded shadow-sm"
        />
        <div>
          <div className="flex mb-1 text-sm">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={i < rating ? 'text-orange-400' : 'text-gray-300'}
                >
                  ★
                </span>
              ))}
          </div>
          <h1 className="text-sm font-semibold leading-tight">{header}</h1>
          <p className="text-orange-500 font-bold">{price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 px-[3%]">
      {/* Most Viewed */}
      <div>
        <h1 className="text-lg font-bold mb-4">MOST VIEWED</h1>
        {Most.map((item, index) => (
          <Card
            key={index}
            url={item.url}
            header={item.header}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      {/* Featured */}
      <div>
        <h1 className="text-lg font-bold mb-4">FEATURED</h1>
        {Featured.map((item, index) => (
          <Card
            key={index}
            url={item.url}
            header={item.header}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      {/* On Sale */}
      <div>
        <h1 className="text-lg font-bold mb-4">ON SALE</h1>
        <p className="text-gray-500">There is no product</p>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-orange-500 text-white p-6 relative flex flex-col justify-center rounded-md">
        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rotate-45"></div>
        <h2 className="text-lg font-bold mb-2 text-center">SIGN UP FOR<br />SEND NEWSLETTER</h2>
        <p className="text-sm text-center mb-4">
          You can be always up to date<br />
          with our company new!
        </p>
        <input
          type="email"
          placeholder="Enter your email address here..."
          className="p-2 text-black rounded w-full mb-3 outline-none border border-white placeholder-gray-600"
        />
        <button className="bg-white text-black font-semibold py-2 rounded hover:bg-gray-100">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default HomeFeatured;
