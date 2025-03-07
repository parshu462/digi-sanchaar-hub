
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  whyJoin: string;
  agreeToTerms: boolean;
}

export const validateStep1 = (formData: FormData): boolean => {
  if (!formData.name.trim()) {
    toast.error('Name is required');
    return false;
  }
  if (!formData.email.trim()) {
    toast.error('Email is required');
    return false;
  }
  if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    toast.error('Please enter a valid email');
    return false;
  }
  if (!formData.phone.trim()) {
    toast.error('Phone number is required');
    return false;
  }
  if (!/^\d{10}$/.test(formData.phone)) {
    toast.error('Please enter a valid 10-digit phone number');
    return false;
  }
  return true;
};

export const validateStep2 = (formData: FormData): boolean => {
  if (!formData.college.trim()) {
    toast.error('College/Institute name is required');
    return false;
  }
  if (!formData.whyJoin.trim()) {
    toast.error('Please tell us why you want to join');
    return false;
  }
  if (!formData.agreeToTerms) {
    toast.error('You must agree to the terms and conditions');
    return false;
  }
  return true;
};
