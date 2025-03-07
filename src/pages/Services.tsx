
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your website's visibility and ranking on search engines with our advanced SEO strategies tailored to your business needs.",
      icon: "📈",
      features: [
        "Keyword Research & Analysis",
        "On-page SEO Optimization",
        "Technical SEO Audit",
        "Backlink Building",
        "Local SEO Strategies",
        "Monthly Performance Reports"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to grow your brand's online presence and reach your target audience effectively.",
      icon: "🚀",
      features: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Conversion Rate Optimization",
        "Analytics & Reporting"
      ]
    },
    {
      title: "Google & JustDial Reviews",
      description: "Build credibility with authentic reviews that attract more customers to your business and improve your online reputation.",
      icon: "⭐",
      features: [
        "Google Business Profile Optimization",
        "Authentic Review Generation",
        "Review Management",
        "Custom Review Strategy",
        "Negative Review Response",
        "Review Analytics"
      ]
    },
    {
      title: "Social Media Marketing",
      description: "Engage with your audience and build brand loyalty through strategic social media campaigns across various platforms.",
      icon: "👥",
      features: [
        "Platform-specific Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Campaigns",
        "Influencer Collaborations",
        "Performance Analytics"
      ]
    },
    {
      title: "Email Marketing",
      description: "Connect directly with your customers through personalized and targeted email campaigns that drive conversions.",
      icon: "📧",
      features: [
        "Email Template Design",
        "Segmentation & Personalization",
        "Automation Workflows",
        "A/B Testing",
        "Campaign Optimization",
        "Performance Analytics"
      ]
    },
    {
      title: "Marketing & Reporting",
      description: "Detailed analytics and reports to track your marketing performance and ROI with actionable insights for improvement.",
      icon: "📊",
      features: [
        "Custom Dashboard Creation",
        "KPI Tracking & Analysis",
        "Monthly Performance Reports",
        "Data-driven Recommendations",
        "Competitor Analysis",
        "Strategy Refinement"
      ]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital marketing solutions to help your business grow online and reach your target audience effectively.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-medium text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-digisanchaar-orange mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-digisanchaar-orange to-red-500 text-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Get in touch with us today to discuss how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-white text-digisanchaar-orange font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => window.location.href = '/get-started'}
                  className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white hover:text-digisanchaar-orange transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
