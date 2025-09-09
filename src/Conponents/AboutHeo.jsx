import React from 'react';

const AboutHeo = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 bg-[#F07C29] text-white flex items-center justify-center px-10 py-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DISCOVER US</h1>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Embark on a literary journey with <strong>A. Lockwood</strong>, where our passion for books meets your love for reading. Explore our vast collection of fiction, nonfiction, graphic novels, and poetry in a welcoming online environment.
          </p>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Join our community of readers and discover hidden gems, timeless classics, and compelling new voices.
          </p>

          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Side - Image Section with Background Color */}
      <div className="w-full md:w-1/2 bg-[#F07C29] flex items-center justify-center p-6">
        <div className="w-full h-96 md:h-[90%] rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://static.wixstatic.com/media/b5d3d21b2c4848f3b842ca2ce7c47752.jpg/v1/fill/w_1125,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b5d3d21b2c4848f3b842ca2ce7c47752.jpg"
            alt="Discover Us"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeo;
