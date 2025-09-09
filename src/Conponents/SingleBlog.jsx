import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "./BlogData";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaArrowLeft } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(`blogMessages-${id}`)) || [];
    setMessages(storedMessages);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem(`blogMessages-${id}`, JSON.stringify(updatedMessages));

    setName("");
    setEmail("");
    setMessage("");
  };

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Blog not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Go back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-10"
      >
        <Link
          to="/blog"
          className="inline-flex items-center space-x-3 text-[#F07C29] font-semibold text-base px-4 py-2 border border-[#F07C29] rounded-md hover:bg-[#F07C29] hover:text-white transition-colors duration-300 shadow-md"
          aria-label="Back to Blog"
        >
          <FaArrowLeft className="text-lg" />
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      {/* Featured Image */}
      <motion.img
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        src={blog.url}
        alt={blog.header}
        className="w-full h-[350px] sm:h-[450px] object-cover rounded-lg shadow-lg mb-10"
      />

      {/* Title & Meta */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{blog.header}</h1>
        <div className="text-sm text-gray-500 mb-8">
          By <span className="font-semibold">{blog.author}</span> •{" "}
          {new Date(blog.date).toLocaleDateString()} • {blog.likes} Likes • {blog.comments} Comments
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-8 flex flex-wrap gap-3"
      >
        {blog.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#F07C29] bg-opacity-20 text-[#F07C29] text-xs font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-opacity-40 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </motion.div>

      {/* Blog Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="prose prose-lg max-w-none text-gray-800 mb-16"
      >
        <p>{blog.text}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, mauris non
          cursus fringilla, justo velit laoreet nisi, in imperdiet est tellus non ipsum.
        </p>
        <p>
          Suspendisse potenti. In ut justo vitae magna efficitur egestas. Sed feugiat, sem ut luctus
          convallis, turpis sem tincidunt est, vitae scelerisque lorem odio nec felis.
        </p>
      </motion.div>

      {/* Social Share */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto border-t border-[#F07C29] pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#F07C29] mb-12 space-y-4 sm:space-y-0"
      >
        <span className="italic text-lg sm:text-base max-w-md text-center sm:text-left">
          Enjoyed this article? Share it with your friends and spread the knowledge!
        </span>
        <div className="flex space-x-6 text-[#F07C29] text-2xl sm:text-xl">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#e56717] transition-colors transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#e56717] transition-colors transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-[#e56717] transition-colors transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-[#e56717] transition-colors transform hover:scale-110"
          >
            <FaYoutube />
          </a>
        </div>
      </motion.div>

      {/* ...rest of your component (Leave a message, messages, etc.) */}
    </div>
  );
};

export default SingleBlog;
