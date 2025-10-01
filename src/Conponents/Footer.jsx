import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <footer className="bg-[#222222] text-gray-400 px-4 md:px-6 py-8 md:py-10 text-sm">
        {/* Top Navigation */}
        <nav className="text-center mb-6 md:mb-8 border-b border-gray-700 pb-4">
          <ul className="inline-flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400">
            {["Home", "About", "Blog", "Contact"].map((item, idx) => (
              <li key={idx} className="hover:text-white transition-colors duration-300">
                <Link 
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="cursor-pointer"
                >
                  {item}
                </Link>
                {idx !== 3 && <span className="mx-2 hidden md:inline">|</span>}
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            Copyright © 2018 <strong>PlazaThemes</strong>. All Right Reserved.
          </p>
          <div className="flex space-x-3">
            <img src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/payment.png" alt="Visa" className="h-6" />
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button - Only on Home Page */}
      {isHomePage && <ScrollToTop />}
    </>
  );
};

export default Footer;