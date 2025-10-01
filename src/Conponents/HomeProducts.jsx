import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const HomeProducts = () => {
  const tabs = ['AUDIO BOOKS', 'CHILDREN BOOKS', 'BUSINESS & MONEY']

  const CardsDetail = [
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/2-600x770.jpg',
      header: 'Rival Field Messenger',
      price: '$1241.00',
      rating: 3,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/17-600x770.jpg',
      header: 'Radiant Tees',
      price: '$241.00',
      rating: 3,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/16-600x770.jpg',
      header: 'Maxima Drawingstring Shorts',
      price: '$602.00',
      rating: 4,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/15-600x770.jpg',
      header: 'Joust Duffle Bags',
      price: '',
      rating: 3,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/14-600x770.jpg',
      header: 'Fusion Backpacks',
      price: '$98.00',
      rating: 2,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/13-600x770.jpg',
      header: 'Endeeavour Daytrip BackPacks',
      price: '$98.00',
      rating: 1,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/12-600x770.jpg',
      header: 'Driven Backpacks',
      price: '$92.00',
      rating: 5,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/11-600x770.jpg',
      header: 'Crown Summit BackPacks $1,202.00',
      price: '',
      rating: 4,
    },
    {
      url: 'https://demo.towerthemes.com/tt_koparion/image/cache/catalog/product/Book/8-600x770.jpg',
      header: 'Vargus All-Weather Tanks',
      price: '$122.00',
      rating: 3,
    },
  ]

  // Store cards in state to rotate on tab change
  const [cards, setCards] = useState(CardsDetail)
  const [activeTab, setActiveTab] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  // Determine items per slide based on screen size
  const itemsPerSlide = windowWidth < 768 ? 1 : 5
  const totalSlides = Math.max(1, cards.length - itemsPerSlide + 1)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Reset slide position when items per slide changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [itemsPerSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < totalSlides ? prev + 1 : prev))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev))
  }

  // Rotate cards: move first card to last on tab change
  const handleTabClick = (index) => {
    if (index !== activeTab) {
      setCards((prevCards) => {
        if (prevCards.length === 0) return prevCards
        return [...prevCards.slice(1), prevCards[0]]
      })
      setActiveTab(index)
      setCurrentSlide(0)
      setHoveredCardIndex(null)
    }
  }

  // Cards visible in the slider
  const visibleCards = cards.slice(currentSlide, currentSlide + itemsPerSlide)

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">OUR PRODUCTS</h1>
      <p className="text-center mb-6 text-gray-600">
        Browse the collection of our best selling and top interesting<br/> products. You’ll definitely find what you
        are looking for.
      </p>

      {/* TABS */}
      <div className="flex justify-center gap-6 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`border-b-2 pb-1 px-3 transition duration-200 ${
              activeTab === index
                ? 'border-orange-500 text-black font-semibold'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <div className="relative group">
        {/* Slide Items - Responsive container */}
        <div className="flex transition-transform duration-500 ease-in-out gap-4">
          {visibleCards.map((item, index) => (
            <div 
              key={index} 
              className={`${windowWidth < 768 ? 'w-full' : 'flex-1 min-w-0'}`}
            >
              <Cards
                url={item.url}
                header={item.header}
                price={item.price}
                rating={item.rating}
                isHovered={hoveredCardIndex === index}
                onHover={() => setHoveredCardIndex(index)}
                onLeave={() => setHoveredCardIndex(null)}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Always visible on mobile */}
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition ${
            windowWidth < 768 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition ${
            windowWidth < 768 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default HomeProducts