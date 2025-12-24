import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {


    return (
        <section id="contact" className="py-24 bg-[#0f1110] px-4 overflow-hidden">
            <div className="max-w-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">Let's Start a <span className="text-gray-500">Project</span></h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <a
                        href="https://forms.gle/LdCauvSVfbuyZyiB7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black font-medium py-4 px-12 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-3 text-lg group"
                    >
                        Start Your Project
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
