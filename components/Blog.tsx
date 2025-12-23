import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Blog: React.FC = () => {
    const articles = [
        {
            id: 'future-of-web-design',
            title: "The Future of Web Design: Immersive Experiences",
            excerpt: "Why 2026 is the year of micro-interactions and 3D web elements.",
            category: "Design Trends",
            date: "Dec 12, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
            className: ""
        },
        {
            id: 'seo-optimization-spa',
            title: "SEO Optimization for Modern Single-Page Apps",
            excerpt: "How to rank #1 without sacrificing performance or design.",
            category: "Development",
            date: "Nov 28, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
            className: ""
        },
        {
            id: 'scaling-brand-identity',
            title: "Scaling Your Brand Identity Digitally",
            excerpt: "Consistency across platforms is key to building trust.",
            category: "Branding",
            date: "Nov 15, 2025",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
            className: ""
        }
    ];

    return (
        <section id="blog" className="py-24 px-4 md:px-8 bg-black border-t border-white/5 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">Thought Leadership</p>
                        <h2 className="text-4xl md:text-5xl font-medium">Latest <span className="text-gray-500">Insights</span></h2>
                    </div>
                    <Link to="/blog" className="hidden md:flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors group">
                        View All Articles
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            to={`/blog/${article.id}`}
                            key={article.id}
                            className={`group cursor-pointer ${article.className}`}
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/50 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wide">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-medium mb-3 group-hover:text-gray-300 transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 line-clamp-2 leading-relaxed text-sm md:text-base">
                                    {article.excerpt}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden flex justify-center">
                    <Link to="/blog" className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors group text-sm">
                        View All Articles
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
