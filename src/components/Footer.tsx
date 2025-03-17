
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-digisanchaar-dark-gray">DigiSanchaar</h3>
            <p className="text-gray-600 mb-4">
              Empowering students while delivering exceptional marketing services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-digisanchaar-blue transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-digisanchaar-blue transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/digi.sanchaar1/" className="text-gray-500 hover:text-digisanchaar-blue transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-digisanchaar-blue transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-digisanchaar-dark-gray">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Services</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-digisanchaar-dark-gray">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">SEO Optimization</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Google & JustDial Reviews</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Social Media Marketing</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Email Marketing</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">Marketing & Reporting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-digisanchaar-dark-gray">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-digisanchaar-orange mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Delhi , India </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-digisanchaar-orange mr-3 flex-shrink-0" />
                <a href="mailto:sanchaardigi1@gmail.com" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">sanchaardigi1@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-digisanchaar-orange mr-3 flex-shrink-0" />
                <a href="tel:+91933650512" className="text-gray-600 hover:text-digisanchaar-orange transition-colors duration-300">+91 93365 50512 </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} DigiSanchaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
