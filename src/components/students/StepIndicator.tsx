
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex justify-between items-center mb-8 relative">
      <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10"></div>
      
      {[1, 2, 3].map((stepNumber) => (
        <div 
          key={stepNumber}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentStep >= stepNumber 
              ? 'bg-digisanchaar-green text-white' 
              : 'bg-gray-200 text-gray-500'
          } ${currentStep === stepNumber ? 'ring-4 ring-green-100' : ''}`}
        >
          {currentStep > stepNumber ? <Check size={16} /> : stepNumber}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
