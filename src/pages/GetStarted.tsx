
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₹4,999",
      description: "Perfect for small businesses just getting started with digital marketing.",
      features: [
        "5 Google Reviews",
        "Social Media Setup",
        "Basic SEO Audit",
        "Email Marketing Setup",
        "Monthly Performance Report"
      ]
    },
    {
      id: "standard",
      name: "Standard",
      price: "₹9,999",
      description: "Ideal for growing businesses looking to expand their online presence.",
      features: [
        "15 Google Reviews",
        "5 JustDial Reviews",
        "Complete Social Media Management",
        "Advanced SEO Implementation",
        "Email Marketing Campaigns",
        "Bi-weekly Performance Reports"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Premium",
      price: "₹19,999",
      description: "Comprehensive solution for established businesses seeking maximum impact.",
      features: [
        "30 Google Reviews",
        "15 JustDial Reviews",
        "Complete Social Media Management",
        "Premium SEO Implementation",
        "Email Marketing Automation",
        "Content Creation",
        "Weekly Performance Reports",
        "Dedicated Account Manager"
      ]
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      navigate('/clients');
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started with DigiSanchaar</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect marketing plan to take your business to the next level.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white rounded-xl overflow-hidden ${
                  plan.popular 
                    ? 'ring-2 ring-digisanchaar-orange shadow-xl relative' 
                    : 'shadow-md hover:shadow-lg transition-shadow duration-300'
                }`}
                onClick={() => handlePlanSelect(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-digisanchaar-orange text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-digisanchaar-green mr-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className={`w-full py-3 rounded-md flex items-center justify-center transition-colors duration-300 ${
                      selectedPlan === plan.id
                        ? 'bg-digisanchaar-orange text-white'
                        : 'border-2 border-digisanchaar-orange text-digisanchaar-orange hover:bg-digisanchaar-orange hover:text-white'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-6">
              Need a custom plan tailored to your specific needs? <a href="/contact" className="text-digisanchaar-orange hover:underline">Contact us</a> for a personalized solution.
            </p>
            
            <button 
              onClick={handleContinue}
              disabled={!selectedPlan}
              className={`inline-flex items-center px-8 py-3 rounded-md ${
                selectedPlan
                  ? 'bg-digisanchaar-orange text-white hover:bg-opacity-90'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors duration-300`}
            >
              Continue <ArrowRight size={18} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
