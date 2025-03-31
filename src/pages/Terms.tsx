
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-digisanchaar-dark-gray">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to DigiSanchaar. These Terms and Conditions govern your use of our website and services. 
              By accessing or using DigiSanchaar's website and services, you agree to be bound by these Terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p>
              DigiSanchaar offers digital marketing services and educational programs for students. Our Passive Income 
              Program is designed to help students earn while they learn by completing simple online tasks.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
            <p>
              The registration fee for our Passive Income Program is ₹249. All payments are processed securely through Razorpay.
              By making a payment, you agree to comply with Razorpay's terms of service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
            <p>
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account information</li>
              <li>Not engage in any fraudulent activities</li>
              <li>Not violate any applicable laws or regulations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              All content on the DigiSanchaar website, including text, graphics, logos, and software, is the property of 
              DigiSanchaar and is protected by intellectual property laws. You may not reproduce, distribute, or create 
              derivative works without our explicit permission.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              DigiSanchaar is not liable for any direct, indirect, incidental, or consequential damages resulting from your 
              use of our services. We do not guarantee specific income results from participating in our programs.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its 
              conflict of law principles.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p>
              DigiSanchaar reserves the right to modify these Terms at any time. We will provide notice of significant changes 
              on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at sanchaardigi1@gmail.com.
            </p>
          </section>
          
          <div className="mt-12 text-sm text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
