import React from 'react';
import { Mail, ArrowRight, Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Large CTA */}
        <div className="flex flex-col items-center text-center mb-20">
            <p className="text-gray-500 mb-6 text-sm">Let's create together</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-10">
                Ready to Start <br/>
                <span className="text-gray-500">Your Project?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mb-10 text-lg">
                Let's discuss your vision and create something extraordinary together. Get in touch today.
            </p>
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
                <Mail size={20} />
                Contact Us
            </button>
            <p className="mt-8 text-gray-500 border-b border-gray-800 pb-1 hover:text-white hover:border-white transition-colors cursor-pointer">
                hello@designstudio.com
            </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
            <div className="flex items-center gap-2">
                <span className="font-script text-2xl text-white">Design</span>
            </div>
            
            <div className="text-sm text-gray-500">
                © 2025 Design Studio
            </div>
            
            <div className="flex items-center gap-6">
                 <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20}/></a>
                 <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20}/></a>
                 <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20}/></a>
                 <a href="#" className="text-gray-500 hover:text-white transition-colors"><Dribbble size={20}/></a>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-900 rounded-full animate-pulse"></div>
                Crafted with passion
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;