import React, { useState, useEffect } from 'react';
import blogData from './BlogData';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Card = ({ id, url, header, text, author, likes, comments, tags }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), id * 100);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div
      className={`
        max-w-md bg-white shadow-md rounded-md overflow-hidden mx-auto border border-gray-100
        transform transition-all duration-700 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        hover:scale-[1.02] hover:shadow-lg
      `}
    >
      <img
        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        src={url}
        alt={header}
        loading="lazy"
      />
      <div className="p-5">
        <h2 className="text-lg font-bold text-black mb-3 line-clamp-2">{header}</h2>

        <div className="flex items-center justify-center gap-2 mb-3">
          <hr className="flex-grow border-t border-gray-300 max-w-[100px]" />
          <div className="w-2 h-2 bg-[#F07C29] rounded-full" />
          <hr className="flex-grow border-t border-gray-300 max-w-[100px]" />
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{text}</p>

        <Link to={`/blog/${id}`}>
          <button className="text-[#F07C29] font-semibold hover:underline focus:outline-none text-sm">
            Read More ➞
          </button>
        </Link>

        <div className="flex justify-between items-center text-xs text-gray-500 mt-5 border-t pt-3">
          <span>By {author}</span>
          <span>{likes} Likes • {comments} Comments</span>
        </div>

        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>In {tags.join(' / ')}</span>
        </div>
      </div>
    </div>
  );
};

const RecentPosts = ({ blogs }) => {
  const latestThree = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="w-full lg:w-1/4 bg-white border border-gray-100 p-6 rounded-md shadow-md h-fit sticky top-20">
      <h3 className="text-lg font-bold text-black mb-4 border-b pb-2">Recent Posts</h3>
      <ul className="space-y-4">
        {latestThree.map((blog) => (
          <li key={blog.id}>
            <Link
              to={`/blog/${blog.id}`}
              className="flex items-start space-x-4 hover:text-[#F07C29] transition-colors"
            >
              <img
                src={blog.url}
                alt={blog.header}
                className="w-16 h-16 object-cover rounded-sm border border-gray-200 shrink-0"
                loading="lazy"
              />
              <div className="text-sm text-gray-800">
                <h4 className="font-semibold text-sm line-clamp-2">{blog.header}</h4>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogSection = () => {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogData.slice(startIndex, startIndex + postsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
            <FiBookOpen className="text-[#F07C29]" size={32} />
            Latest Blog Posts
          </h1>
          <p className="mt-2 text-gray-500">Read trending articles on wellness, astrology, books, and more.</p>
          <div className="mt-4 mx-auto w-24 h-1 bg-[#F07C29] rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Blog Cards Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((blog) => (
                <Card key={blog.id} {...blog} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-4 items-center">
              <button
                onClick={goToPrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-sm font-medium border rounded flex items-center gap-1 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[#F07C29] text-white hover:bg-orange-600'
                }`}
              >
                <FiChevronLeft />
                Prev
              </button>

              <span className="text-sm font-semibold text-gray-800">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-sm font-medium border rounded flex items-center gap-1 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[#F07C29] text-white hover:bg-orange-600'
                }`}
              >
                Next
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <RecentPosts blogs={blogData} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
