
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your website's visibility and ranking on search engines with our advanced SEO strategies.",
      icon: "📈"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to grow your brand's online presence and reach.",
      icon: "🚀"
    },
    {
      title: "All Kind Of Reviews",
      description: "Build credibility with authentic reviews that attract more customers to your business.",
      icon: "⭐"
    },
    {
      title: "Social Media Marketing",
      description: "Engage with your audience and build brand loyalty through strategic social media campaigns.",
      icon: "👥"
    },
    {
      title: "Email Marketing",
      description: "Connect directly with your customers through personalized and targeted email campaigns.",
      icon: "📧"
    },
    {
      title: "Marketing & Reporting",
      description: "Detailed analytics and reports to track your marketing performance and ROI.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading mx-auto">
              Comprehensive digital marketing solutions to help your business thrive in the online world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1
                    }
                  }
                }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Why Choose DigiSanchaar</h2>
            <p className="section-subheading mx-auto">
              We combine expertise with innovation to deliver exceptional results for our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Complete Digital Marketing Solutions by Digi Sanchaar for Businesses" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <ul className="space-y-4">
                {[
                  "Expert team of marketing professionals",
                  "Proven track record of successful campaigns",
                  "Customized strategies for each client",
                  "Affordable pricing with high ROI",
                  "Regular reports and transparent communication",
                  "Innovative approaches to digital marketing"
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-digisanchaar-green mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-digisanchaar-orange to-red-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join DigiSanchaar today and experience the difference our marketing expertise can make for your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/get-started'} 
                className="bg-white text-digisanchaar-orange font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Get Started
              </button>
              <button 
                onClick={() => window.location.href = '/contact'} 
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white hover:text-digisanchaar-orange transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
