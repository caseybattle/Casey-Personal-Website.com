import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
      <nav 
        className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'w-full max-w-4xl bg-[#1a1c1b]/80 backdrop-blur-md border border-white/10 shadow-lg' 
            : 'w-full max-w-5xl bg-[#1a1c1b] border border-transparent'}
        `}
      >
        <div className="flex items-center gap-2">
          <span className="font-script text-3xl text-white">Design</span>
          <span className="text-xs uppercase tracking-widest text-gray-400 mt-2">Studio</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
          Let's Talk
          <ArrowRight size={16} />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;