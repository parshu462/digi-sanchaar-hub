
import React from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  whyJoin: string;
  agreeToTerms: boolean;
}

interface StudentFormStep2Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const StudentFormStep2 = ({ formData, handleChange }: StudentFormStep2Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
      
      <div>
        <label htmlFor="college" className="block text-gray-700 font-medium mb-2">College/Institute</label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
          placeholder="Enter your college or institute name"
        />
      </div>
      
      <div>
        <label htmlFor="whyJoin" className="block text-gray-700 font-medium mb-2">Why do you want to join?</label>
        <textarea
          id="whyJoin"
          name="whyJoin"
          value={formData.whyJoin}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
          placeholder="Tell us why you want to join our program..."
        ></textarea>
      </div>
      
      <div className="flex items-start">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="mt-1 mr-2"
        />
        <label htmlFor="agreeToTerms" className="text-gray-700">
          I agree to the <a href="#" className="text-digisanchaar-orange hover:underline">Terms and Conditions</a> and <a href="#" className="text-digisanchaar-orange hover:underline">Privacy Policy</a>
        </label>
      </div>
    </motion.div>
  );
};

export default StudentFormStep2;
