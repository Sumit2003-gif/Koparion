import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const faqData = [
  {
    question: 'How soon can I expect a response?',
    answer: 'We usually respond within 24-48 hours during business days.',
  },
  {
    question: 'Can I request a custom consultation?',
    answer: 'Absolutely! Just mention it in your message.',
  },
  {
    question: 'What are your support hours?',
    answer: 'Monday to Friday, 9am to 6pm.',
  },
];

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fff8f3] flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full bg-no-repeat h-64 md:h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/17788702/pexels-photo-17788702.jpeg')",
          backgroundPosition: 'center',
          backgroundSize:"cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-auto bg-white rounded-lg shadow-xl p-8 md:p-16 -mt-20 md:-mt-32 z-20 relative">
        <div className="md:flex md:space-x-12">
          {/* Contact Form */}
          <form
            className="md:w-2/3 space-y-6"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            <div className="flex flex-col md:flex-row md:space-x-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                aria-label="Your name"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full md:w-1/2 mt-4 md:mt-0 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                aria-label="Your email"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              aria-label="Subject"
            />

            <textarea
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none transition"
              aria-label="Your message"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#F07C29] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#e56717] transition duration-300"
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="md:w-1/3 mt-12 md:mt-0 space-y-10 text-gray-800">
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#F07C29]">Get in Touch</h3>

              <div className="flex items-start space-x-4 mb-6">
                <FaEnvelope className="text-[#F07C29] text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p>contact@yourdomain.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <FaPhone className="text-[#F07C29] text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-[#F07C29] text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p>1234 Book St, Reading City, 56789</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#F07C29]">Follow Us</h3>
              <div className="flex space-x-6 text-[#F07C29] text-2xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="hover:text-orange-500 transition" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="hover:text-orange-500 transition" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="hover:text-orange-500 transition" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="hover:text-orange-500 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ / Help Section */}
        

        {/* Location Map (at the very bottom) */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019109817899!2d-122.41941548468156!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4f620f7%3A0xa7a91eae0cc5a6b8!2sSan%20Francisco%20Public%20Library!5e0!3m2!1sen!2sus!4v1694116238173!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="border-0 rounded-md"
          ></iframe>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center text-gray-500 text-sm font-light">
          &copy; {new Date().getFullYear()} T. Hartman. All rights reserved.
          <br />
          Crafted with <span role="img" aria-label="love">❤️</span> to help you connect.
        </div>
      </div>
    </div>
  );
};

export default Contact;
