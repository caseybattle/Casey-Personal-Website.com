import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 'future-of-web-design',
    title: "The Future of Web Design: Immersive Experiences",
    excerpt: "Why 2026 is the year of micro-interactions and 3D web elements.",
    category: "Design Trends",
    date: "Dec 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 'seo-optimization-spa',
    title: "SEO Optimization for Modern Single-Page Apps",
    excerpt: "How to rank #1 without sacrificing performance or design.",
    category: "Development",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 'scaling-brand-identity',
    title: "Scaling Your Brand Identity Digitally",
    excerpt: "Consistency across platforms is key to building trust.",
    category: "Branding",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 'atlanta-web-design-roots',
    title: "Atlanta Roots, Global Standards: My Journey in Web Design",
    excerpt: "Growing up in ATL and building a world-class local tech scene.",
    category: "Personal Story",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 'premium-design-growth',
    title: "High-Performance Web Design: Why Quality Outperforms Generic Builders",
    excerpt: "Why DIY builders fail the premium businesses of North Georgia.",
    category: "Strategy",
    date: "Dec 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 'georgia-tech-branding',
    title: "The 2026 Guide to Tech Branding & Web Design in Georgia",
    excerpt: "Scaling local brands across the Gwinnett and Sandy Springs corridors.",
    category: "Regional Insights",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  }
];

const BlogArchive: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Insights</h1>
        <p className="text-xl text-gray-400 max-w-2xl">Thoughts, strategies, and predictions on the future of digital design and development.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link to={`/blog/${article.id}`} key={article.id} className="group cursor-pointer">
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

              <h3 className="text-2xl font-medium mb-3 group-hover:text-gray-300 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-400 line-clamp-2 leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-sm text-white group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight size={16} />
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogArchive;
