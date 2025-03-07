
import React from 'react';

interface FormFooterProps {
  step: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  paymentComplete: boolean;
}

const FormFooter = ({ step, handlePrevStep, handleNextStep, paymentComplete }: FormFooterProps) => {
  return (
    <div className="mt-8 flex justify-between">
      {step > 1 && !paymentComplete ? (
        <button
          onClick={handlePrevStep}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-300"
        >
          Back
        </button>
      ) : (
        <div></div>
      )}
      
      {step < 3 ? (
        <button
          onClick={handleNextStep}
          className="btn-primary"
        >
          Continue
        </button>
      ) : !paymentComplete ? (
        <div></div>
      ) : null}
    </div>
  );
};

export default FormFooter;
