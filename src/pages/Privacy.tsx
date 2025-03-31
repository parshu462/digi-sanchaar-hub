
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-digisanchaar-dark-gray">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              At DigiSanchaar, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, college/institution name.</li>
              <li><strong>Payment Information:</strong> When you make a payment, your payment details are processed securely through Razorpay. We do not store your complete payment information.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To process your payments</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p>
              We use Razorpay to process payments. When you make a payment, you are also subject to Razorpay's privacy policy and terms of service. 
              We encourage you to review these policies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Data Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the personal information we have about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to our processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p>
              We use cookies to improve your experience on our website. You can set your browser to refuse all or some browser cookies, 
              but this may affect your ability to use certain features of our website.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. 
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at sanchaardigi1@gmail.com.
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

export default Privacy;
