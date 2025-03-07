
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Students = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    whyJoin: '',
    agreeToTerms: false
  });
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      toast.error('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Email is required');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Phone number is required');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.college.trim()) {
      toast.error('College/Institute name is required');
      return false;
    }
    if (!formData.whyJoin.trim()) {
      toast.error('Please tell us why you want to join');
      return false;
    }
    if (!formData.agreeToTerms) {
      toast.error('You must agree to the terms and conditions');
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handlePayment = () => {
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setPaymentComplete(true);
      
      // Simulate sending WhatsApp group link
      setTimeout(() => {
        toast.success('WhatsApp group link sent to your email!');
      }, 1500);
    }, 2000);
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
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Join DigiSanchaar Passive Income Program</h1>
              <p className="text-gray-600 text-lg">
                Earn while you learn! Join our program for just ₹249 and start earning passive income by completing simple tasks.
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8 relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10"></div>
              
              {[1, 2, 3].map((stepNumber) => (
                <div 
                  key={stepNumber}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepNumber 
                      ? 'bg-digisanchaar-green text-white' 
                      : 'bg-gray-200 text-gray-500'
                  } ${step === stepNumber ? 'ring-4 ring-green-100' : ''}`}
                >
                  {step > stepNumber ? <Check size={16} /> : stepNumber}
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                        placeholder="Enter your 10-digit phone number"
                        maxLength={10}
                      />
                    </div>
                  </motion.div>
                )}
                
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                    
                    <div>
                      <label htmlFor="college" className="block text-gray-700 font-medium mb-2">College/Institute</label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                        placeholder="Enter your college or institute name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="whyJoin" className="block text-gray-700 font-medium mb-2">Why do you want to join?</label>
                      <textarea
                        id="whyJoin"
                        name="whyJoin"
                        value={formData.whyJoin}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                        placeholder="Tell us why you want to join our program..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="agreeToTerms" className="text-gray-700">
                        I agree to the <a href="#" className="text-digisanchaar-orange hover:underline">Terms and Conditions</a> and <a href="#" className="text-digisanchaar-orange hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </motion.div>
                )}
                
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-4">Payment</h2>
                    
                    {paymentComplete ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check className="text-digisanchaar-green" size={30} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration Successful!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for joining DigiSanchaar Passive Income Program. We've sent the WhatsApp group link to your email address.
                        </p>
                        <button
                          onClick={() => window.location.href = '/'}
                          className="btn-primary"
                        >
                          Back to Home
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Registration Fee:</span>
                            <span className="font-medium">₹249</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-gray-200">
                            <span className="text-gray-800 font-semibold">Total Amount:</span>
                            <span className="text-digisanchaar-orange font-bold">₹249</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Select Payment Method</label>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer bg-gray-50">
                                <div className="w-4 h-4 rounded-full border-2 border-digisanchaar-orange bg-digisanchaar-orange flex items-center justify-center mr-3">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <span>Credit/Debit Card</span>
                              </div>
                              <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer">
                                <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-3"></div>
                                <span>UPI</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Card Number</label>
                              <input
                                type="text"
                                id="cardNumber"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                                placeholder="1234 5678 9012 3456"
                              />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                                <input
                                  type="text"
                                  id="expiryDate"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div>
                                <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
                                <input
                                  type="text"
                                  id="cvv"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                                  placeholder="123"
                                  maxLength={3}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
                
                <div className="mt-8 flex justify-between">
                  {step > 1 && !paymentComplete ? (
                    <button
                      onClick={handlePrevStep}
                      className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-300"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {step < 3 ? (
                    <button
                      onClick={handleNextStep}
                      className="btn-primary"
                    >
                      Continue
                    </button>
                  ) : !paymentComplete ? (
                    <button
                      onClick={handlePayment}
                      disabled={loading}
                      className="btn-primary flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Pay ₹249'
                      )}
                    </button>
                  ) : null}
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

export default Students;
