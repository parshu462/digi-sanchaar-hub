
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import useRazorpay from 'react-razorpay';
import StudentFormStep1 from './StudentFormStep1';
import StudentFormStep2 from './StudentFormStep2';
import PaymentStep from './PaymentStep';
import StepIndicator from './StepIndicator';
import FormFooter from './FormFooter';
import { validateStep1, validateStep2 } from '@/utils/validation';
import { sendInvoiceEmail } from '@/utils/emailService';

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  whyJoin: string;
  agreeToTerms: boolean;
}

const StudentRegistrationForm = () => {
  // Fix: useRazorpay returns a function, not an array to destructure
  const Razorpay = useRazorpay();
  const [formData, setFormData] = useState<FormData>({
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

  const handleNextStep = () => {
    if (step === 1 && validateStep1(formData)) {
      setStep(2);
    } else if (step === 2 && validateStep2(formData)) {
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handlePayment = () => {
    setLoading(true);
    
    const dummyOrderId = "order_" + new Date().getTime();
    
    // Handler for payment success
    const handlePaymentSuccess = (response: any) => {
      console.log("Payment successful", response);
      setLoading(false);
      setPaymentComplete(true);
      
      // Send invoice email
      sendInvoiceEmail({
        to: formData.email,
        orderData: {
          orderId: dummyOrderId,
          items: [{
            name: "DigiSanchaar Passive Income Program Registration",
            quantity: 1,
            price: 249
          }],
          billing: {
            fullName: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.college
          },
          amount: 249,
          tax: 0,
          subtotal: 249,
          timestamp: new Date().toISOString(),
          status: 'completed'
        }
      });
      
      setTimeout(() => {
        toast.success('WhatsApp group link sent to your email!');
        console.log("Sending registration details to backend", {
          paymentId: response.razorpay_payment_id,
          formData
        });
      }, 1500);
    };

    // Handler for payment cancellation
    const handlePaymentCancel = () => {
      setLoading(false);
      toast.error('Payment cancelled. Please try again.');
    };
    
    // Handler for payment failure
    const handlePaymentFailure = (response: any) => {
      setLoading(false);
      toast.error('Payment failed. Please try again.');
      console.error("Payment failed:", response.error);
    };
    
    const options = {
      key: "rzp_test_At6CSWODqdwX6K", // Updated with the provided API key
      amount: "24900", // Amount in smallest currency unit (paise)
      currency: "INR",
      name: "DigiSanchaar",
      description: "Passive Income Program Registration",
      image: "/placeholder.svg",
      order_id: dummyOrderId,
      handler: handlePaymentSuccess,
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        college: formData.college,
        purpose: "DigiSanchaar Passive Income Program"
      },
      theme: {
        color: "#ff6b35",
      }
    };

    try {
      const paymentObject = new Razorpay(options);
      paymentObject.open();
      
      // Set up event listeners for payment actions
      paymentObject.on('payment.cancel', handlePaymentCancel);
      paymentObject.on('payment.failed', handlePaymentFailure);
      
    } catch (error) {
      console.error("Razorpay Error:", error);
      setLoading(false);
      toast.error('Payment failed to initialize. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Join DigiSanchaar Passive Income Program</h1>
        <p className="text-gray-600 text-lg">
          Earn while you learn! Join our program for just ₹249 and start earning passive income by completing simple tasks.
        </p>
      </div>
      
      <StepIndicator currentStep={step} />
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <StudentFormStep1 formData={formData} handleChange={handleChange} />
          )}
          
          {step === 2 && (
            <StudentFormStep2 formData={formData} handleChange={handleChange} />
          )}
          
          {step === 3 && (
            <PaymentStep 
              formData={formData}
              loading={loading}
              paymentComplete={paymentComplete}
              handlePayment={handlePayment}
            />
          )}
          
          <FormFooter 
            step={step}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            paymentComplete={paymentComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
