
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleBillingInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const validateForm = () => {
    if (!billingInfo.fullName.trim()) {
      toast.error('Full name is required');
      return false;
    }
    if (!billingInfo.email.trim() || !/^\S+@\S+\.\S+$/.test(billingInfo.email)) {
      toast.error('Valid email is required');
      return false;
    }
    if (!billingInfo.phone.trim() || !/^\d{10}$/.test(billingInfo.phone)) {
      toast.error('Valid 10-digit phone number is required');
      return false;
    }
    if (!billingInfo.address.trim()) {
      toast.error('Address is required');
      return false;
    }
    if (!billingInfo.city.trim()) {
      toast.error('City is required');
      return false;
    }
    if (!billingInfo.state.trim()) {
      toast.error('State is required');
      return false;
    }
    if (!billingInfo.pincode.trim() || !/^\d{6}$/.test(billingInfo.pincode)) {
      toast.error('Valid 6-digit pincode is required');
      return false;
    }

    if (billingInfo.paymentMethod === 'card') {
      if (!cardInfo.cardNumber.trim() || cardInfo.cardNumber.length < 16) {
        toast.error('Valid card number is required');
        return false;
      }
      if (!cardInfo.expiryDate.trim() || !/^\d{2}\/\d{2}$/.test(cardInfo.expiryDate)) {
        toast.error('Valid expiry date (MM/YY) is required');
        return false;
      }
      if (!cardInfo.cvv.trim() || !/^\d{3}$/.test(cardInfo.cvv)) {
        toast.error('Valid 3-digit CVV is required');
        return false;
      }
    }

    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setOrderComplete(true);
      setOrderId(`ORD${Math.floor(Math.random() * 900000) + 100000}`);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  const tax = Math.round(getTotalPrice() * 0.18);
  const totalAmount = getTotalPrice() + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
            
            {orderComplete ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-digisanchaar-green" size={30} />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Order Placed Successfully!</h2>
                <p className="text-gray-600 mb-2">
                  Thank you for your purchase. Your order has been confirmed.
                </p>
                <p className="text-digisanchaar-orange font-medium mb-6">
                  Order ID: {orderId}
                </p>
                <p className="text-gray-600 mb-8">
                  We've sent the order confirmation and invoice to your email address.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  >
                    Back to Home
                  </button>
                  <button
                    onClick={() => navigate('/clients')}
                    className="btn-primary"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-6">Billing Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={billingInfo.fullName}
                            onChange={handleBillingInfoChange}
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
                            value={billingInfo.email}
                            onChange={handleBillingInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={billingInfo.phone}
                          onChange={handleBillingInfoChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                          placeholder="Enter your 10-digit phone number"
                          maxLength={10}
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={billingInfo.address}
                          onChange={handleBillingInfoChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                          placeholder="Enter your address"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={billingInfo.city}
                            onChange={handleBillingInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                          <select
                            id="state"
                            name="state"
                            value={billingInfo.state}
                            onChange={handleBillingInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                          >
                            <option value="">Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                            {/* Add more states as needed */}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="pincode" className="block text-gray-700 font-medium mb-2">Pincode</label>
                          <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={billingInfo.pincode}
                            onChange={handleBillingInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                            placeholder="6-digit pincode"
                            maxLength={6}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div 
                          className={`border rounded-md p-4 flex items-center cursor-pointer ${
                            billingInfo.paymentMethod === 'card' 
                              ? 'border-digisanchaar-orange bg-orange-50' 
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                          onClick={() => setBillingInfo({ ...billingInfo, paymentMethod: 'card' })}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            billingInfo.paymentMethod === 'card' 
                              ? 'border-digisanchaar-orange' 
                              : 'border-gray-300'
                          }`}>
                            {billingInfo.paymentMethod === 'card' && (
                              <div className="w-3 h-3 bg-digisanchaar-orange rounded-full"></div>
                            )}
                          </div>
                          <span className="ml-3">Credit/Debit Card</span>
                        </div>
                        <div 
                          className={`border rounded-md p-4 flex items-center cursor-pointer ${
                            billingInfo.paymentMethod === 'upi' 
                              ? 'border-digisanchaar-orange bg-orange-50' 
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                          onClick={() => setBillingInfo({ ...billingInfo, paymentMethod: 'upi' })}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            billingInfo.paymentMethod === 'upi' 
                              ? 'border-digisanchaar-orange' 
                              : 'border-gray-300'
                          }`}>
                            {billingInfo.paymentMethod === 'upi' && (
                              <div className="w-3 h-3 bg-digisanchaar-orange rounded-full"></div>
                            )}
                          </div>
                          <span className="ml-3">UPI</span>
                        </div>
                      </div>
                      
                      {billingInfo.paymentMethod === 'card' && (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Card Number</label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={cardInfo.cardNumber}
                              onChange={handleCardInfoChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                              placeholder="1234 5678 9012 3456"
                              maxLength={16}
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                              <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={cardInfo.expiryDate}
                                onChange={handleCardInfoChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                                placeholder="MM/YY"
                                maxLength={5}
                              />
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={cardInfo.cvv}
                                onChange={handleCardInfoChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                                placeholder="123"
                                maxLength={3}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {billingInfo.paymentMethod === 'upi' && (
                        <div>
                          <label htmlFor="upiId" className="block text-gray-700 font-medium mb-2">UPI ID</label>
                          <input
                            type="text"
                            id="upiId"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
                            placeholder="yourname@upi"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-32">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                      
                      <div className="mb-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-700">{item.name} × {item.quantity}</span>
                            <span className="font-medium">₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal:</span>
                          <span>₹{getTotalPrice()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tax (18% GST):</span>
                          <span>₹{tax}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200">
                          <span className="font-semibold">Total:</span>
                          <span className="text-digisanchaar-orange font-bold">₹{totalAmount}</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={handlePlaceOrder}
                        disabled={loading}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Processing...
                          </>
                        ) : (
                          'Place Order'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
