import React from 'react';
import AboutHeo from '../Conponents/AboutHeo';
import AboutMisson from '../Conponents/AboutMisson';
import AboutTeam from '../Conponents/AboutTeam';

const About = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2898170/pexels-photo-2898170.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          
          {/* Flex Row: Koparain - Circle - About */}
          <div className="flex items-center justify-center space-x-6 mb-6">
            <p className="text-lg uppercase tracking-widest text-gray-300">Koparain</p>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <p className="text-lg uppercase tracking-widest text-gray-300">About</p>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold">ABOUT KOPARISAN</h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Koparisan is dedicated to delivering innovative solutions that empower communities
            and foster sustainable development. Learn more about our mission and values.
          </p>
        </div>
      </section>
      <section>
        <AboutHeo/>
      </section>
      <section>
        {/* <AboutMisson/> */}
      </section>
      <section>
        <AboutTeam/>
      </section>
    </div>
  );
};

export default About;
