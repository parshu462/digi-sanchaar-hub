
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home page which has the actual content
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to DigiSanchaar</h1>
          <p className="text-xl text-gray-600">Redirecting you to our homepage...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
