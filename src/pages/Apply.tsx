
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Apply for a Position</h1>
            <p className="text-gray-600 text-lg mb-8">
              Join our team at DigiSanchaar and be part of a dynamic marketing agency that's changing the digital landscape.
            </p>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-6">Current Openings</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Digital Marketing Specialist",
                      description: "We're looking for an experienced Digital Marketing Specialist to join our team.",
                      requirements: ["3+ years of experience", "SEO knowledge", "Social media expertise"]
                    },
                    {
                      title: "Content Writer",
                      description: "Join us as a Content Writer to create engaging content for our clients.",
                      requirements: ["Strong writing skills", "SEO understanding", "Creative mindset"]
                    },
                    {
                      title: "SEO Expert",
                      description: "Help our clients rank higher on search engines with your SEO expertise.",
                      requirements: ["Google Analytics proficiency", "Technical SEO skills", "Link building experience"]
                    }
                  ].map((job, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-digisanchaar-orange transition-colors duration-300">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <button className="px-4 py-2 bg-digisanchaar-orange text-white rounded-md hover:bg-opacity-90 transition-colors duration-300">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Apply;
