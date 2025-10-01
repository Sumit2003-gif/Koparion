import { useState } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX, FiHeart, FiChevronDown, FiRefreshCw } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  };

  const addToCart = () => {
    setCartItems(cartItems + 1);
    setCartTotal(cartTotal + 19.99);
  };

  const addToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3">
        {/* Mobile Header - Single Row */}
        <div className="flex items-center justify-between md:hidden">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
          
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="https://demo.towerthemes.com/tt_koparion/image/catalog/logo/logo.png"
              alt="Koparion Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* Right Icons - Cart and Wishlist */}
          <div className="flex items-center gap-3">
            {/* Wishlist */}
            <div 
              className="flex items-center text-gray-800 hover:text-orange-500 cursor-pointer transition-colors group relative"
              onClick={addToWishlist}
            >
              <div className="relative">
                <FiHeart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium group-hover:bg-orange-600 transition-colors">
                    {wishlistCount}
                  </div>
                )}
              </div>
            </div>
            
            {/* Cart */}
            <div 
              className="flex items-center text-gray-800 hover:text-orange-500 cursor-pointer transition-colors group"
              onClick={addToCart}
            >
              <div className="relative">
                <FiShoppingBag className="h-5 w-5" />
                {cartItems > 0 && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium group-hover:bg-orange-600 transition-colors">
                    {cartItems}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Header */}
        <div className="hidden md:flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Desktop Menu Button (Hidden) */}
          <button 
            onClick={toggleMenu}
            className="hidden md:flex text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
          
          {/* Search Bar */}
          <div className={`w-full md:w-1/4 lg:max-w-sm transition-all duration-300 ${isSearchOpen ? 'block' : 'block'}`}>
            <form onSubmit={handleSearch} className="relative flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-orange-500 text-white px-4 py-2.5 rounded-r-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                <FiSearch className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Logo */}
          <div className="flex justify-center order-first md:order-none">
            <img
              src="https://demo.towerthemes.com/tt_koparion/image/catalog/logo/logo.png"
              alt="Koparion Logo"
              className="h-12 object-contain"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-end md:justify-start">
            {/* Account */}
            <div className="relative">
              <button 
                onClick={toggleAccount}
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors"
                aria-expanded={isAccountOpen}
              >
                <FiUser className="h-5 w-5" />
                <span className="text-sm font-medium">Account</span>
                <FiChevronDown className={`h-4 w-4 transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Account Dropdown */}
              {isAccountOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</a>
                </div>
              )}
            </div>
            
            {/* Wishlist */}
            <div 
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
              onClick={addToWishlist}
            >
              <FiHeart className="h-5 w-5" />
              <span className="text-sm">Wish List ({wishlistCount})</span>
            </div>
            
            {/* Compare */}
            <div className="flex items-center gap-2 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              <FiRefreshCw className="h-5 w-5" />
              <span className="text-sm">My Compare</span>
            </div>
            
            {/* Cart */}
            <div 
              className="flex items-center gap-2 text-gray-800 hover:text-orange-500 cursor-pointer transition-colors group"
              onClick={addToCart}
            >
              <div className="relative">
                <FiShoppingBag className="h-6 w-6 md:h-7 md:w-7" />
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium group-hover:bg-orange-600 transition-colors">
                  {cartItems}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">MY CART</p>
                <p className="text-xs text-gray-500">${cartTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-1">
                  {navLinks.map((link) => (
                    <li key={link.name} className="list-none">
                      <NavLink
                        to={link.path}
                        end
                        className={({ isActive }) =>
                          `relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? 'text-orange-400 font-semibold'
                              : 'text-gray-200 hover:text-white'
                          }`
                        }
                      >
                        {link.name}
                        {({ isActive }) => isActive && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </div>
                
                {/* Desktop Special Links */}
                <div className="flex items-center space-x-4">
                  <div 
                    className="flex items-center gap-1.5 text-gray-300 hover:text-orange-400 cursor-pointer transition-colors"
                    onClick={addToWishlist}
                  >
                    <FiHeart className="h-4 w-4" />
                    <span className="text-sm">Wish List</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300 hover:text-orange-400 cursor-pointer transition-colors">
                    <FiRefreshCw className="h-4 w-4" />
                    <span className="text-sm">My Compare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 shadow-lg`}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gray-700 text-orange-400'
                      : 'text-gray-200 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Mobile Special Links */}
            <div className="pt-2 pb-1 border-t border-gray-700 mt-2">
              <div 
                className="flex items-center gap-2 px-3 py-2.5 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer transition-colors"
                onClick={addToWishlist}
              >
                <FiHeart className="h-5 w-5" />
                <span>Wish List ({wishlistCount})</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer transition-colors">
                <FiRefreshCw className="h-5 w-5" />
                <span>My Compare</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer transition-colors"
                   onClick={toggleAccount}>
                <div className="flex items-center gap-2">
                  <FiUser className="h-5 w-5" />
                  <span>My Account</span>
                </div>
                <FiChevronDown className={`h-4 w-4 transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} />
              </div>
              {isAccountOpen && (
                <div className="pl-8 pb-2 space-y-1">
                  <a href="#" className="block py-1 text-sm text-gray-300 hover:text-white">Sign In</a>
                  <a href="#" className="block py-1 text-sm text-gray-300 hover:text-white">Register</a>
                  <a href="#" className="block py-1 text-sm text-gray-300 hover:text-white">My Orders</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;