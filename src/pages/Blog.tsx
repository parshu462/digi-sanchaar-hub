
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Effective SEO Strategies for Small Businesses",
      excerpt: "Learn how small businesses can improve their online visibility with these proven SEO strategies.",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "How to Build a Successful Social Media Marketing Strategy",
      excerpt: "Discover the key elements of a successful social media marketing strategy for your business.",
      date: "July 22, 2023",
      readTime: "10 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "The Importance of Customer Reviews for Your Business",
      excerpt: "Why customer reviews matter and how they can significantly impact your business growth.",
      date: "August 9, 2023",
      readTime: "7 min read",
      category: "Reviews",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Email Marketing Trends That Will Dominate 2023",
      excerpt: "Stay ahead of the competition with these emerging email marketing trends for 2023.",
      date: "September 3, 2023",
      readTime: "9 min read",
      category: "Email Marketing",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "How to Measure the ROI of Your Digital Marketing Campaigns",
      excerpt: "Learn effective methods to accurately measure the return on investment of your digital marketing efforts.",
      date: "October 18, 2023",
      readTime: "11 min read",
      category: "Reporting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "The Future of Digital Marketing: Trends to Watch",
      excerpt: "Explore the emerging trends that will shape the future of digital marketing in the coming years.",
      date: "November 5, 2023",
      readTime: "12 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and tips in digital marketing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-digisanchaar-orange/10 text-digisanchaar-orange px-2 py-1 rounded-md">
                      {post.category}
                    </span>
                    <div className="mx-2">•</div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="mx-2">•</div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 hover:text-digisanchaar-orange transition-colors duration-300">
                    <a href="#">{post.title}</a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-digisanchaar-orange hover:text-digisanchaar-orange/80 transition-colors duration-300">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button className="px-6 py-3 border-2 border-digisanchaar-orange text-digisanchaar-orange rounded-md hover:bg-digisanchaar-orange hover:text-white transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
