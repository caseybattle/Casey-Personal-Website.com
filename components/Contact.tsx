import React from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    if (submitted) {
        return (
            <section id="contact" className="py-24 bg-[#0f1110] px-4 flex items-center justify-center min-h-[60vh]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-12 bg-[#1a1c1b] rounded-3xl border border-white/5 max-w-md w-full shadow-2xl"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle className="text-green-500" size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-medium text-white mb-2">Message Sent</h3>
                    <p className="text-gray-400">Thanks for reaching out! We'll get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-8 text-sm text-gray-500 hover:text-white underline transition-colors">
                        Send another message
                    </button>
                </motion.div>
            </section>
        )
    }

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

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <label className="text-xs uppercase tracking-wider text-gray-500 ml-1">Your Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-[#1a1c1b] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300"
                                placeholder="John Doe"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <label className="text-xs uppercase tracking-wider text-gray-500 ml-1">Your Email</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-[#1a1c1b] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300"
                                placeholder="john@example.com"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                    >
                        <label className="text-xs uppercase tracking-wider text-gray-500 ml-1">Service Interested In</label>
                        <div className="relative">
                            <select className="w-full bg-[#1a1c1b] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300 appearance-none cursor-pointer">
                                <option>Web Design & Development</option>
                                <option>Brand Identity</option>
                                <option>Video Production</option>
                                <option>Consultation</option>
                            </select>
                            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2"
                    >
                        <label className="text-xs uppercase tracking-wider text-gray-500 ml-1">Project Details</label>
                        <textarea
                            rows={4}
                            className="w-full bg-[#1a1c1b] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none"
                            placeholder="Tell us about your goals..."
                        ></textarea>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: 0.5 }}
                        type="submit"
                        className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4"
                    >
                        Send Message
                        <Send size={18} />
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
