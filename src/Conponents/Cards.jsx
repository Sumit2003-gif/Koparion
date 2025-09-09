import React from 'react';
import {
  FaSearchPlus,
  FaShoppingCart,
  FaHeart,
  FaExchangeAlt,
} from 'react-icons/fa';

const Cards = ({ url, header, price, rating = 3, isHovered, onHover, onLeave }) => {
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-orange-400' : 'text-gray-300'}
        >
          ★
        </span>
      ));
  };

  return (
    <div
      className="w-full max-w-xs mx-auto text-center cursor-pointer border border-gray-200 rounded-lg overflow-hidden shadow-sm transition duration-300 hover:shadow-md bg-white"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      {/* === Image + Hover Icon === */}
      <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
        <img
          src={url}
          alt={header}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
        />

        {/* Hover Zoom Icon Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-[#F07C29] text-white rounded-full p-3 text-xl">
            <FaSearchPlus />
          </div>
        </div>
      </div>

      {/* === Info Section === */}
      <div className="p-3 flex-grow flex flex-col justify-between">
        {/* Star Rating */}
        <div className="flex justify-center text-sm">{renderStars()}</div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 mt-2 line-clamp-2">{header}</h3>

        {/* Price */}
        <p className="text-[#F07C29] text-lg font-bold mt-1">{price}</p>

        {/* Hover Action Buttons */}
        <div
          className={`flex justify-center gap-6 mt-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="flex items-center gap-2 text-gray-800 hover:text-[#F07C29] text-sm">
            <FaShoppingCart /> Add
          </button>
          <button className="text-gray-800 hover:text-[#F07C29]">
            <FaHeart />
          </button>
          <button className="text-gray-800 hover:text-[#F07C29]">
            <FaExchangeAlt />
          </button>
        </div>
      </div>

      {/* === Bottom Divider === */}
      <hr className="border-t border-gray-200 mt-2" />
    </div>
  );
};

export default Cards;
