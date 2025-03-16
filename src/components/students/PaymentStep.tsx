
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Shield } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  whyJoin: string;
  agreeToTerms: boolean;
}

interface PaymentStepProps {
  formData: FormData;
  loading: boolean;
  paymentComplete: boolean;
  handlePayment: () => void;
}

const PaymentStep = ({ formData, loading, paymentComplete, handlePayment }: PaymentStepProps) => {
  return (
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
            Thank you for joining DigiSanchaar Passive Income Program. We've sent the WhatsApp group link and invoice to your email address.
          </p>
          <div className="p-4 mb-6 border border-gray-200 rounded-lg bg-gray-50 text-left max-w-md mx-auto">
            <h4 className="font-medium text-gray-900 mb-2">Order Summary</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Name:</span>
              <span className="text-gray-900">{formData.name}</span>
              
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-900">{formData.email}</span>
              
              <span className="text-gray-600">Program:</span>
              <span className="text-gray-900">Passive Income Program</span>
              
              <span className="text-gray-600">Amount Paid:</span>
              <span className="text-gray-900 font-medium">₹249</span>
            </div>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      ) : (
        <>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Order Details</h3>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="text-gray-900">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="text-gray-900">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Program:</span>
                <span className="text-gray-900">Passive Income Program</span>
              </div>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Registration Fee:</span>
              <span className="font-medium">₹249</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-800 font-semibold">Total Amount:</span>
              <span className="text-digisanchaar-orange font-bold">₹249</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <img src="https://cdn.razorpay.com/logo.svg" alt="Razorpay" className="h-6" />
            <span className="text-sm text-gray-700">Secure payment powered by Razorpay</span>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-800 mb-6 flex items-start gap-3">
            <Shield className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <div className="text-sm">
              <p className="font-medium mb-1">Secure Payment</p>
              <p>
                You'll be redirected to Razorpay's secure payment gateway to complete your payment. After successful payment, you'll receive the WhatsApp group link and a detailed invoice on your email.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handlePayment}
              disabled={loading}
              className="btn-primary w-full max-w-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : (
                'Pay ₹249 securely with Razorpay'
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png" alt="UPI" className="h-8" />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default PaymentStep;
