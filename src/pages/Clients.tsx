
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart, ReviewType } from '@/contexts/CartContext';

const ReviewPurchase = () => {
  const navigate = useNavigate();
  const { addItem, getTotalItems } = useCart();
  const [selectedType, setSelectedType] = useState<ReviewType>('google');
  const [quantity, setQuantity] = useState<number>(10);

  const reviewTypes = [
    { id: 'google', name: 'Google Maps Reviews', price: 40 },
    { id: 'justdial', name: 'Just Dial Reviews', price: 40 },
    { id: 'practo', name: 'Practo Reviews', price: 40 },
    { id: 'amazon', name: 'Amazon Reviews', price: 40 },
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
              <h1 className="text-3xl font-bold text-gray-900">Purchase Reviews</h1>
              <button 
                onClick={() => navigate('/cart')}
                className="flex items-center gap-2 bg-digisanchaar-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                <ShoppingCart size={18} />
                <span>Cart ({getTotalItems()})</span>
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold mb-6">Select Review Type</h2>
                
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
                          <h3 className="font-medium text-gray-900">{review.name}</h3>
                          <p className="text-gray-500 text-sm mt-1">₹{review.price} per review</p>
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
                  <h2 className="text-2xl font-semibold mb-4">Select Quantity</h2>
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
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReviewPurchase;
