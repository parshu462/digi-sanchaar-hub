
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart, ReviewType } from '@/contexts/CartContext';

const Clients = () => {
  const navigate = useNavigate();
  const { addItem, getTotalItems } = useCart();
  const [selectedType, setSelectedType] = useState<ReviewType>('google');
  const [quantity, setQuantity] = useState<number>(10);

  const reviewTypes = [
    { 
      id: 'google', 
      name: 'Google Maps Reviews', 
      price: 40, 
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', 
      description: 'Boost your business credibility with authentic Google Maps reviews from real users' 
    },
    { 
      id: 'justdial', 
      name: 'Just Dial Reviews', 
      price: 40, 
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', 
      description: 'Enhance your JustDial profile with positive reviews to stand out from competitors' 
    },
    { 
      id: 'practo', 
      name: 'Practo Reviews', 
      price: 40, 
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', 
      description: 'Perfect for healthcare professionals looking to improve their online reputation' 
    },
    { 
      id: 'amazon', 
      name: 'Amazon Reviews', 
      price: 120, 
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', 
      description: 'Increase your product visibility and sales with authentic Amazon reviews' 
    },
  ];

  const additionalServices = [
    { 
      id: 'seo', 
      name: 'SEO Optimization Package', 
      price: 4999, 
      image: 'https://images.unsplash.com/photo-1571106191037-7bd1456c4acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Complete SEO package including keyword research, on-page and off-page optimization',
      features: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Monthly Reporting']
    },
    { 
      id: 'social', 
      name: 'Social Media Marketing', 
      price: 2999, 
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Comprehensive social media management across platforms to boost your online presence',
      features: ['Content Creation', 'Regular Posting', 'Engagement Monitoring', 'Performance Analytics']
    },
    { 
      id: 'email', 
      name: 'Email Marketing Campaign', 
      price: 1999, 
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Effective email campaigns to nurture leads and boost conversions',
      features: ['Campaign Design', 'Audience Segmentation', 'Automated Sequences', 'Performance Tracking']
    }
  ];

  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const selectedReview = reviewTypes.find((review) => review.id === selectedType);
    if (selectedReview) {
      addItem({
        type: selectedType as ReviewType,
        quantity,
        price: selectedReview.price,
        name: selectedReview.name,
      });
    }
  };

  const handleAddServiceToCart = (service: any) => {
    addItem({
      type: service.id as ReviewType,
      quantity: 1,
      price: service.price,
      name: service.name,
    });
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type as ReviewType);
  };

  const calculateTotal = () => {
    const reviewType = reviewTypes.find((review) => review.id === selectedType);
    return reviewType ? reviewType.price * quantity : 0;
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
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
              <button 
                onClick={() => navigate('/cart')}
                className="flex items-center gap-2 bg-digisanchaar-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                <ShoppingCart size={18} />
                <span>Cart ({getTotalItems()})</span>
              </button>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Review Services</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-6">Select Review Type</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {reviewTypes.map((review) => (
                      <div 
                        key={review.id}
                        onClick={() => handleTypeSelect(review.id)}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                          selectedType === review.id 
                            ? 'border-digisanchaar-orange bg-orange-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="flex-grow">
                            <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
                              <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="font-medium text-gray-900">{review.name}</h3>
                            <p className="text-gray-500 text-sm mt-1">₹{review.price} per review</p>
                            <p className="text-gray-600 text-sm mt-2">{review.description}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedType === review.id 
                              ? 'border-digisanchaar-orange bg-digisanchaar-orange' 
                              : 'border-gray-300'
                          }`}>
                            {selectedType === review.id && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Select Quantity</h3>
                    <p className="text-gray-500 text-sm mb-4">Minimum quantity: 10 reviews</p>
                    
                    <div className="flex items-center border-2 border-gray-200 rounded-lg w-fit">
                      <button 
                        onClick={() => handleQuantityChange(-10)}
                        className="px-4 py-2 text-gray-500 hover:text-digisanchaar-orange focus:outline-none"
                        disabled={quantity <= 10}
                      >
                        <Minus size={18} />
                      </button>
                      <input 
                        type="number" 
                        value={quantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          if (!isNaN(value) && value >= 10) {
                            setQuantity(value);
                          }
                        }}
                        className="w-20 text-center py-2 focus:outline-none"
                        min="10"
                      />
                      <button 
                        onClick={() => handleQuantityChange(10)}
                        className="px-4 py-2 text-gray-500 hover:text-digisanchaar-orange focus:outline-none"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Price per review:</span>
                      <span className="font-medium">₹{reviewTypes.find(r => r.id === selectedType)?.price || 0}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Quantity:</span>
                      <span className="font-medium">{quantity} reviews</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-gray-800 font-semibold">Total:</span>
                      <span className="text-digisanchaar-orange font-bold">₹{calculateTotal()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 bg-digisanchaar-orange text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => {
                        handleAddToCart();
                        navigate('/cart');
                      }}
                      className="flex-1 bg-digisanchaar-green text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Marketing Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {additionalServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-digisanchaar-orange font-bold text-xl">₹{service.price}</span>
                      </div>
                      
                      <button 
                        onClick={() => handleAddServiceToCart(service)}
                        className="w-full bg-digisanchaar-orange text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Clients;
