
import React from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  whyJoin: string;
  agreeToTerms: boolean;
}

interface StudentFormStep1Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const StudentFormStep1 = ({ formData, handleChange }: StudentFormStep1Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
          placeholder="Enter your email address"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digisanchaar-orange"
          placeholder="Enter your 10-digit phone number"
          maxLength={10}
        />
      </div>
    </motion.div>
  );
};

export default StudentFormStep1;
