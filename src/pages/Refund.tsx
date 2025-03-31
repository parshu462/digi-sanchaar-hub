
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Refund = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-digisanchaar-dark-gray">Cancellation and Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Cancellation and Refund Policy outlines the terms under which you may cancel your registration 
              and request a refund for DigiSanchaar's Passive Income Program.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
            <p>
              We offer refunds under the following conditions:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You request a refund within 48 hours of your registration payment</li>
              <li>You have not accessed or used any of the program materials, including WhatsApp groups, training materials, or completed any tasks</li>
              <li>Technical issues prevented you from accessing the program despite reasonable attempts</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Situations</h2>
            <p>
              Refunds will not be provided in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>More than 48 hours have passed since your registration payment</li>
              <li>You have already accessed or used any program materials</li>
              <li>You joined the WhatsApp group or accessed any training content</li>
              <li>You've already completed any tasks or received any compensation</li>
              <li>Your request is based solely on changing your mind or no longer having time to participate</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
            <p>
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact our customer support at sanchaardigi1@gmail.com with the subject line "Refund Request"</li>
              <li>Include your full name, email address used for registration, and transaction ID</li>
              <li>Explain the reason for your refund request</li>
              <li>We will review your request within 3 business days</li>
              <li>If approved, the refund will be processed through the original payment method used for the purchase</li>
              <li>Refunds may take 5-7 business days to reflect in your account, depending on your payment provider</li>
            </ol>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cancellation of Services</h2>
            <p>
              DigiSanchaar reserves the right to cancel or suspend services in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violation of our Terms and Conditions</li>
              <li>Fraudulent activity or misrepresentation</li>
              <li>Inappropriate behavior in program-related communications</li>
              <li>Technical or operational issues requiring service suspension</li>
            </ul>
            <p>
              In case of service cancellation by DigiSanchaar, refund eligibility will be determined on a case-by-case basis.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
            <p>
              DigiSanchaar reserves the right to modify this Cancellation and Refund Policy at any time. 
              Any changes will be effective immediately upon posting on this page.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about this Cancellation and Refund Policy, please contact us at sanchaardigi1@gmail.com.
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

export default Refund;
