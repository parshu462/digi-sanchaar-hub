
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const JoinUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to Students page
    navigate('/students');
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-28 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">Redirecting to our Passive Income Program...</h1>
          <div className="mt-4 animate-pulse">
            <div className="w-10 h-10 bg-digisanchaar-orange rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;
