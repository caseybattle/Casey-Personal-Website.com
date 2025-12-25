import React from 'react';
import { Mail, ArrowRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black pt-20 pb-10 px-4 md:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">


                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-display italic font-medium text-xl text-white">Casey Battle | Digital</span>
                    </div>

                    {/* Local Links (SEO) */}
                    <div className="flex gap-4 text-xs text-gray-600">
                        <a href="/web-design-atlanta-ga" className="hover:text-gray-400 transition-colors">Atlanta Web Design</a>
                        <span className="text-gray-800">•</span>
                        <a href="/web-design-decatur-ga" className="hover:text-gray-400 transition-colors">Web Design Decatur GA</a>
                    </div>

                    <div className="text-sm text-gray-500">
                        © 2025 Design Studio
                    </div>

                    <div className="flex items-center gap-6">
                        {/* <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a> */}
                        {/* <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a> */}
                        <a href="https://www.linkedin.com/in/casey-battle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="https://github.com/caseybattle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
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