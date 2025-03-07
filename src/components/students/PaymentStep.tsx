
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

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
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-800 mb-6">
            <p className="text-sm">
              <strong>Note:</strong> You'll be redirected to Razorpay to complete your payment securely. After successful payment, you'll receive the WhatsApp group link on your email.
            </p>
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
                'Pay ₹249 with Razorpay'
              )}
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default PaymentStep;
