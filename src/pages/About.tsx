
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DigiSanchaar</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate digital marketers committed to empowering businesses and students alike.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At DigiSanchaar, we're on a mission to transform the digital marketing landscape by creating a unique ecosystem 
                that benefits both businesses and students.
              </p>
              <p className="text-gray-600 mb-8">
                We believe in providing affordable, high-quality marketing services to businesses of all sizes while 
                offering students real-world experience and passive income opportunities.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <ul className="space-y-3">
                {[
                  "Quality above everything",
                  "Innovation in marketing strategies",
                  "Transparency with clients and team members",
                  "Continuous learning and improvement",
                  "Empowering the next generation of marketers"
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-digisanchaar-green mr-2 mt-1 flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Our Team" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4">
                DigiSanchaar was founded in 2020 with a simple idea: to bridge the gap between businesses needing 
                affordable marketing services and students seeking practical experience and income.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation has grown into a comprehensive digital marketing agency with a 
                network of talented students and professionals working together to deliver exceptional results.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across various industries while providing valuable opportunities for students 
                to learn, earn, and grow in the digital marketing field.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kunal",
                  role: "Founder & CEO",
                  bio: "Digital marketing expert with over 10 years of experience in the industry.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  name: "Saumya Tiwari",
                  role: "Co-Founder",
                  bio: "Specializes in creating comprehensive marketing strategies for diverse clients.",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                  name: "Vikram Singh",
                  role: "SEO Specialist",
                  bio: "Passionate about helping businesses improve their search engine rankings.",
                  image: "https://randomuser.me/api/portraits/men/68.jpg"
                }
              ].map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-digisanchaar-orange font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
