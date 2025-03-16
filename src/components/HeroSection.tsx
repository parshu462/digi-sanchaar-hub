
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 bg-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left z-10"
          >
            <div className="inline-block border-l-4 border-digisanchaar-orange pl-3 mb-4">
              <p className="text-digisanchaar-dark-gray text-lg font-medium">DigiSanchaar Marketing Agency</p>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              "Empowering <br />
              Students, <br />
              Elevating Brands"
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-lg mb-8 max-w-lg"
            >
              Join DigiSanchaar to earn passive income while learning and contributing 
              to top-notch marketing strategies for brands worldwide.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => navigate('/clients')}
                className="btn-primary text-base px-8 py-3"
              >
                Clients
              </button>
              <button 
                onClick={() => navigate('/students')}
                className="btn-secondary text-base px-8 py-3"
              >
                Students
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Digital Marketing Team Collaboration" 
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-red-50/30 rounded-2xl -z-10 blur-md"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-red-50 rounded-full blur-3xl opacity-60 -z-10"></div>
    </section>
  );
};

export default HeroSection;
