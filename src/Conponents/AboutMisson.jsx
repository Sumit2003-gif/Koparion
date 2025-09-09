import React from 'react';

const AboutMisson = () => {
  return (
    <div className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 text-gray-800">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-gray-900">
          Our Mission
        </h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          At T. Hartman, we're committed to redefining the eBook experience.
        </p>
      </div>

      {/* Mission Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission at <strong>T. Hartman</strong> is to provide readers with a seamless and enjoyable eBook experience.
            We aim to offer a wide range of topics and genres to cater to every reader's preference, ensuring accessibility
            and satisfaction.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            By featuring thematic collections and exclusive offers, we strive to enhance the reading journey,
            making it both exciting and rewarding for our users.
          </p>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="https://static.wixstatic.com/media/11062b_e07451ebecc94f539ac784b4d63027d4~mv2.jpg/v1/crop/x_0,y_29,w_5642,h_2182/fill/w_1944,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e07451ebecc94f539ac784b4d63027d4~mv2.jpg"
            alt="Mission Visual"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-5xl mx-auto mt-12 space-y-6 text-center md:text-left">
        <p className="text-lg leading-relaxed text-gray-700">
          At <strong>T. Hartman</strong>, we prioritize enhancing your reading experience with user-friendly tools
          for note-taking and highlighting.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Explore our thematic collections and take advantage of limited-time offers to elevate your browsing journey.
        </p>
      </div>
    </div>
  );
};

export default AboutMisson;
