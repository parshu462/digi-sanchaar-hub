
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();

  const handleQuantityChange = (id: string, quantity: number, change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 10) {
      updateQuantity(id, newQuantity);
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
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
            
            {items.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-md">
                <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-6">Looks like you haven't added any reviews to your cart yet.</p>
                <button 
                  onClick={() => navigate('/clients')}
                  className="btn-primary"
                >
                  Browse Reviews
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <table className="w-full">
                      <thead className="border-b border-gray-200">
                        <tr>
                          <th className="text-left py-3 font-semibold text-gray-700">Product</th>
                          <th className="text-center py-3 font-semibold text-gray-700">Quantity</th>
                          <th className="text-right py-3 font-semibold text-gray-700">Price</th>
                          <th className="text-right py-3 font-semibold text-gray-700">Subtotal</th>
                          <th className="w-10"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {items.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="py-4 text-gray-800">{item.name}</td>
                            <td className="py-4">
                              <div className="flex items-center justify-center border-2 border-gray-200 rounded-lg w-fit mx-auto">
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.quantity, -10)}
                                  className="px-2 py-1 text-gray-500 hover:text-digisanchaar-orange focus:outline-none"
                                  disabled={item.quantity <= 10}
                                >
                                  <Minus size={16} />
                                </button>
                                <input 
                                  type="number" 
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (!isNaN(value) && value >= 10) {
                                      updateQuantity(item.id, value);
                                    }
                                  }}
                                  className="w-14 text-center py-1 focus:outline-none text-sm"
                                  min="10"
                                />
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.quantity, 10)}
                                  className="px-2 py-1 text-gray-500 hover:text-digisanchaar-orange focus:outline-none"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            </td>
                            <td className="py-4 text-right text-gray-600">₹{item.price}</td>
                            <td className="py-4 text-right font-medium">₹{item.price * item.quantity}</td>
                            <td className="py-4 text-right">
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-digisanchaar-red transition-colors duration-300"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 pt-6 border-t border-gray-200">
                    <div className="w-full md:w-1/2">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Subtotal:</span>
                          <span className="font-medium">₹{getTotalPrice()}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Tax (18% GST):</span>
                          <span className="font-medium">₹{Math.round(getTotalPrice() * 0.18)}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200">
                          <span className="text-gray-800 font-semibold">Total:</span>
                          <span className="text-digisanchaar-orange font-bold">₹{getTotalPrice() + Math.round(getTotalPrice() * 0.18)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 flex justify-end">
                      <button 
                        onClick={() => navigate('/checkout')}
                        className="btn-primary w-full md:w-auto"
                      >
                        Proceed to Checkout
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

export default Cart;
