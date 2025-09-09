import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const testimonials = [
  {
    quote:
      "This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue magna. Pellentesque felis lorem, pulvinar sed eros ..",
    author: "REBECKA FILSON",
    bg: "https://images.pexels.com/photos/33685484/pexels-photo-33685484.jpeg", // background image
  },
  {
    quote:
      "Amazing service! I would recommend it to anyone looking to read something inspiring every day. Lorem ipsum dolor sit amet consectetur.",
    author: "JASON SMITH",
    bg: "https://images.pexels.com/photos/9058960/pexels-photo-9058960.jpeg",
  },
  {
    quote:
      "An outstanding experience, from beginning to end. The books were great, the support was helpful, and I learned a lot.",
    author: "SARAH JOHNSON",
    bg: "https://images.pexels.com/photos/8293699/pexels-photo-8293699.jpeg",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center group transition-all duration-500"
      style={{ backgroundImage: `url(${testimonial.bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Slider Arrows (appear on hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoChevronBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoChevronForward />
      </button>

      {/* Content */}
      <div className="text-white text-center max-w-3xl px-6 z-10">
        <div className="flex justify-center mb-6">
          <div className="border-2 border-white p-6 rounded-full">
            <FaQuoteRight className="text-3xl md:text-5xl" />
          </div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed">{testimonial.quote}</p>
        <p className="mt-4 text-orange-400 font-semibold">- {testimonial.author}</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
