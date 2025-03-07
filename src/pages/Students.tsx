
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudentRegistrationForm from '@/components/students/StudentRegistrationForm';

const Students = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <StudentRegistrationForm />
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Students;
