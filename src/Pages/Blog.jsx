import React from 'react'
import BlogSection from '../Conponents/BlogSection'

const Blog = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] md:h-[70vh] lg:h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/32472616/pexels-photo-32472616.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-10 lg:px-20 w-full text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-wide">
              BLOG CATEGORIES
            </h1>
            
            {/* Breadcrumb with better styling */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              <div className="flex items-center text-sm md:text-base">
                <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
                <span className="mx-2 text-orange-400">&lt;</span>
                <span className="text-orange-400">Blog</span>
              </div>
              
              {/* Decorative line */}
              <div className="hidden md:block w-24 h-px bg-gradient-to-r from-orange-400 to-transparent"></div>
              
              {/* Subtitle */}
              <p className="text-sm md:text-base text-gray-300 mt-2 md:mt-0">
                Discover our latest articles and insights
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>
      
      <section>
        <BlogSection/>
      </section>
    </div>
  )
}

export default Blog