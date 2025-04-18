
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
    
    // Generate a transaction ID for this payment
    const transactionId = `txn_${new Date().getTime()}`;
    
    // Handler for payment success
    const handlePaymentSuccess = (response: any) => {
      console.log("Payment successful", response);
      setLoading(false);
      setPaymentComplete(true);
      
      // Prepare invoice data
      const invoiceData = {
        orderId: response.razorpay_payment_id || transactionId,
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
      };
      
      // Send invoice email with detailed HTML
      sendInvoiceEmail({
        to: formData.email,
        orderData: invoiceData
      }).then(() => {
        toast.success('Registration successful! Check your email for details.');
      }).catch(error => {
        console.error("Failed to send invoice email:", error);
        toast.error('Registration successful, but there was an issue sending the email.');
      });
      
      // Also log what we would send to backend in a real implementation
      console.log("Sending registration details to backend", {
        paymentId: response.razorpay_payment_id,
        formData,
        transactionDetails: invoiceData
      });
      
      setTimeout(() => {
        toast.success('WhatsApp group link sent to your email!');
      }, 3000);
    };

    try {
      // Options for Razorpay - Note: in a production environment, the order_id should be generated from your backend
      const options = {
        key: "rzp_test_At6CSWODqdwX6K",
        amount: "24900", // Amount in paise (249 INR)
        currency: "INR",
        name: "DigiSanchaar",
        description: "Passive Income Program Registration",
        // Remove order_id since we don't have a backend to generate one
        // For testing purposes, Razorpay will create a temporary one
        image: "https://digisanchaar.com/wp-content/uploads/2023/06/cropped-digi-logo.png",
        handler: function(response: any) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#ff6b35"
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            console.log('Payment modal dismissed');
          }
        },
        notes: {
          userEmail: formData.email,
          userPhone: formData.phone,
          college: formData.college
        }
      };

      // Fix the type issue by using a type assertion
      const paymentObject = new Razorpay(options as any);
      
      paymentObject.on('payment.failed', function(response: any) {
        console.error("Payment failed:", response.error);
        setLoading(false);
        toast.error('Payment failed. Please try again.');
      });
      
      paymentObject.open();
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
