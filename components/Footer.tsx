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

                    {/* Regional SEO Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-gray-500 max-w-4xl mx-auto mb-8 border-t border-white/5 pt-8 w-full order-last md:order-none">
                        <span className="text-gray-400 uppercase tracking-widest w-full text-center mb-2">Service Areas</span>
                        <a href="/web-design-atlanta-ga" className="hover:text-white transition-colors">Atlanta</a>
                        <a href="/web-design-decatur-ga" className="hover:text-white transition-colors">Decatur</a>
                        <a href="/web-design-alpharetta-ga" className="hover:text-white transition-colors">Alpharetta</a>
                        <a href="/web-design-marietta-ga" className="hover:text-white transition-colors">Marietta</a>
                        <a href="/web-design-roswell-ga" className="hover:text-white transition-colors">Roswell</a>
                        <a href="/web-design-sandy-springs-ga" className="hover:text-white transition-colors">Sandy Springs</a>
                        <a href="/web-design-gwinnett-ga" className="hover:text-white transition-colors">Gwinnett</a>
                        <a href="/web-design-brookhaven-ga" className="hover:text-white transition-colors">Brookhaven</a>
                        <a href="/web-design-smyrna-ga" className="hover:text-white transition-colors">Smyrna</a>
                        <a href="/web-design-buckhead-ga" className="hover:text-white transition-colors">Buckhead</a>
                    </div>

                    {/* National Solutions Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-gray-500 max-w-4xl mx-auto mb-8 border-t border-white/5 pt-8 w-full order-last md:order-none">
                        <span className="text-gray-400 uppercase tracking-widest w-full text-center mb-2">Specializations</span>
                        <a href="/services/premium-saas-design" className="hover:text-white transition-colors">SaaS Design</a>
                        <a href="/services/custom-react-development" className="hover:text-white transition-colors">React Development</a>
                        <a href="/services/high-conversion-landing-pages" className="hover:text-white transition-colors">Landing Pages</a>
                        <a href="/services/startup-mvp-builds" className="hover:text-white transition-colors">Startup MVPs</a>
                        <a href="/services/branding-for-tech" className="hover:text-white transition-colors">Tech Branding</a>
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