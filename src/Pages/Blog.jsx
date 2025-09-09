import React from 'react'
import BlogSection from '../Conponents/BlogSection'

const Blog = () => {
  return (
    <div>
       <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/32472616/pexels-photo-32472616.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-20 flex  justify-between w-full text-white">
        <h1 className="text-4xl font-bold mb-2">BLOG CATEGORIES</h1>
        <p className="text-sm"
        >
        Home  &lt; Blog
        </p>
      </div>
    </section>
    <section>
      <BlogSection/>
    </section>

    </div>
  )
}

export default Blog
 