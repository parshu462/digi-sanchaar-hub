
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Join Us', path: '/students' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-digisanchaar-dark-gray to-digisanchaar-orange">DigiSanchaar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active-nav-link' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="nav-link flex items-center gap-1">
                    <LogIn size={18} />
                    <span>Sign In</span>
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="btn-primary flex items-center gap-1">
                    <UserPlus size={18} />
                    <span>Sign Up</span>
                  </button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white md:hidden transition-all duration-300 ease-in-out opacity-100 pt-6 px-4">

             {/* 🔥 NEW: Close Button at Top-Right */}
    <div className="flex justify-end">
      <button onClick={toggleMenu} className="text-gray-700" aria-label="Close menu">
        <X size={28} />
      </button>
    </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active-nav-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {isSignedIn ? (
                <div className="flex justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <button className="nav-link w-full flex items-center justify-center gap-1 py-2">
                      <LogIn size={18} />
                      <span>Sign In</span>
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="btn-primary w-full flex items-center justify-center gap-1">
                      <UserPlus size={18} />
                      <span>Sign Up</span>
                    </button>
                  </SignUpButton>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
