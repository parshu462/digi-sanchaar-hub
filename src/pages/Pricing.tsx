
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-digisanchaar-dark-gray">Pricing Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Pricing Policy outlines the pricing structure for DigiSanchaar's services and programs, including our Passive Income Program for students.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Passive Income Program</h2>
            <p>
              The registration fee for our Passive Income Program is a one-time payment of ₹249 (Indian Rupees Two Hundred and Forty-Nine only).
            </p>
            <p className="mt-2">
              This fee includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access to our WhatsApp community group</li>
              <li>Training materials and resources</li>
              <li>Opportunity to earn passive income through completing simple online tasks</li>
              <li>Ongoing support from our team</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Payment Methods</h2>
            <p>
              We accept payments through Razorpay, which supports various payment methods including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Credit Cards (Visa, MasterCard, etc.)</li>
              <li>Debit Cards</li>
              <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
              <li>Net Banking</li>
              <li>Wallets</li>
            </ul>
            <p>
              All transactions are processed securely through Razorpay's payment gateway.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Currency</h2>
            <p>
              All prices are listed in Indian Rupees (INR). For international users, the conversion to your local currency will be handled by your payment provider at the prevailing exchange rate.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Taxes</h2>
            <p>
              The prices displayed are inclusive of all applicable taxes. A detailed invoice will be provided upon successful payment.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Price Changes</h2>
            <p>
              DigiSanchaar reserves the right to modify the pricing of our services at any time. Any price changes will not affect users who have already paid for the program.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Promotional Offers</h2>
            <p>
              We may occasionally offer promotional discounts or special pricing. These offers will be clearly communicated along with their terms and validity period.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Earnings Disclaimer</h2>
            <p>
              The Passive Income Program provides opportunities to earn income, but actual earnings will vary based on individual effort, time commitment, and task completion. We do not guarantee any specific level of earnings.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about our Pricing Policy, please contact us at sanchaardigi1@gmail.com.
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

export default Pricing;
