import React from 'react';
import { Mail, ArrowRight, Instagram, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black pt-20 pb-10 px-4 md:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">


                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-display italic font-medium text-xl text-white">Battle Labs</span>
                    </div>

                    <div className="text-sm text-gray-400">
                        © 2025 Design Studio
                    </div>

                    <div className="flex items-center gap-6">
                        {/* <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a> */}
                        {/* <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a> */}

                        <a href="https://github.com/caseybattle" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-900 rounded-full animate-pulse"></div>
                        Crafted with passion
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;