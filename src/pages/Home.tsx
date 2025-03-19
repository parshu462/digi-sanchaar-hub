
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Home = () => {
  // Animation variants
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    })
  };

  const staggerContainerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
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
      title: "Google & JustDial Reviews",
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
      
      {/* Services Section with animations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariant}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading mx-auto">
              Comprehensive digital marketing solutions to help your business thrive in the online world.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUpVariant}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-4xl mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section with animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariant}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Why Choose DigiSanchaar</h2>
            <p className="section-subheading mx-auto">
              We combine expertise with innovation to deliver exceptional results for our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Marketing Team" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.ul
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {[
                "Expert team of marketing professionals",
                "Proven track record of successful campaigns",
                "Customized strategies for each client",
                "Affordable pricing with high ROI",
                "Regular reports and transparent communication",
                "Innovative approaches to digital marketing"
              ].map((point, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInUpVariant}
                  custom={index}
                  className="flex items-start"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="text-digisanchaar-green mr-3 mt-1 flex-shrink-0" />
                  </motion.span>
                  <span className="text-gray-700">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
      
      {/* Call to Action with animations */}
      <section className="py-20 bg-gradient-to-r from-digisanchaar-orange to-red-500 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-6 text-center relative z-10"
        >
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Take Your Business to the Next Level?
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"
          >
            Join DigiSanchaar today and experience the difference our marketing expertise can make for your brand.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => window.location.href = '/get-started'} 
              className="bg-white text-digisanchaar-orange font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => window.location.href = '/contact'} 
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white hover:text-digisanchaar-orange transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            animate={{ 
              x: [0, 10, 0], 
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "mirror" 
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -15, 0], 
              y: [0, 15, 0],
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              repeatType: "mirror",
              delay: 1 
            }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"
          />
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
