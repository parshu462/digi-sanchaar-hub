
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.01, -0.05, 0.95],
        delay: 0.4
      }
    }
  };

  const decorationVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: [0, 0.6, 0.4, 0.6],
      transition: { 
        duration: 4, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 bg-white min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left z-10"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block border-l-4 border-digisanchaar-orange pl-3 mb-4"
            >
              <p className="text-digisanchaar-dark-gray text-lg font-medium">DigiSanchaar Marketing Agency</p>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              "Empowering <br />
              Students, <br />
              Elevating Brands"
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg mb-8 max-w-lg"
            >
              Join DigiSanchaar to earn passive income while learning and contributing 
              to top-notch marketing strategies for brands worldwide.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/clients')}
                className="btn-primary text-base px-8 py-3"
              >
                Clients
              </motion.button>
              <motion.button 
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/students')}
                className="btn-secondary text-base px-8 py-3"
              >
                Students
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Digital Marketing Strategy Illustration" 
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-red-50/30 rounded-2xl -z-10 blur-md"
              animate={{ 
                background: [
                  "linear-gradient(to bottom right, rgba(239, 246, 255, 0.3), rgba(254, 226, 226, 0.3))",
                  "linear-gradient(to bottom right, rgba(224, 242, 254, 0.3), rgba(252, 231, 243, 0.3))",
                  "linear-gradient(to bottom right, rgba(239, 246, 255, 0.3), rgba(254, 226, 226, 0.3))"
                ]
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "mirror" as const
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Animated background decorations */}
      <motion.div 
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/4 right-1/3 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-red-50 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-50 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default HeroSection;
