import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const testimonials = [
  {
    quote:
      "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue magna. Pellentesque felis lorem, pulvinar sed eros ..",
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
      className="relative h-[300px] md:h-[500px] flex items-center justify-center bg-cover bg-center group transition-all duration-500"
      style={{ backgroundImage: `url(${testimonial.bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>

      {/* Slider Arrows - Always visible on mobile, hover on desktop */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-3xl bg-black/30 md:bg-transparent p-2 rounded-full md:rounded-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all z-20"
        aria-label="Previous testimonial"
      >
        <IoChevronBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-3xl bg-black/30 md:bg-transparent p-2 rounded-full md:rounded-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all z-20"
        aria-label="Next testimonial"
      >
        <IoChevronForward />
      </button>

      {/* Content */}
      <div className="text-white text-center max-w-3xl px-4 md:px-6 z-10">
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="border-2 border-white p-3 md:p-6 rounded-full">
            <FaQuoteRight className="text-2xl md:text-5xl" />
          </div>
        </div>
        <p className="text-base md:text-xl leading-relaxed">{testimonial.quote}</p>
        <p className="mt-2 md:mt-4 text-orange-400 font-semibold text-sm md:text-base">- {testimonial.author}</p>
        
        {/* Mobile Indicators */}
        <div className="flex justify-center mt-4 space-x-2 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-orange-500' : 'bg-white/50'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;