import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

const blogData = {
  'future-of-web-design': {
    title: "The Future of Web Design: Immersive Experiences",
    category: "Design Trends",
    date: "Dec 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">The web is no longer just a collection of static pages. As we look towards 2026, the boundary between digital interfaces and immersive environments is dissolving. Users demand experiences that feel alive, responsive, and deeply engaging.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Micro-Interactions are Major</h2>
        <p className="mb-6">It's not about the big animations anymore; it's about the subtle feedback loops. The way a button presses in, the magnetic pull of a cursor, the gentle parallax of background elements. These details communicate care and quality.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">3D for Everyone</h2>
        <p className="mb-6">With the optimization of WebGL and libraries like Three.js (which we use at CLX Studios), 3D elements are becoming lightweight enough for standard business sites. This adds a layer of depth—literally—that flat design cannot compete with.</p>

        <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-300 my-8">
          "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
        </blockquote>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Rise of Dark Mode Default</h2>
        <p className="mb-6">Dark mode is no longer a preference; for many premium brands, it's the default. It saves energy on OLED screens and reduces eye strain, but visually, it allows colors to pop and creates a cinematic atmosphere that white backgrounds often fail to deliver.</p>
      </>
    )
  },
  'seo-optimization-spa': {
    title: "SEO Optimization for Modern Single-Page Apps",
    category: "Development",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">Single-Page Applications (SPAs) are beloved for their smooth, app-like feel. But partially rendering content with JavaScript has historically been a nightmare for SEO. Google's crawlers have gotten smarter, but you still need to help them out.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Meta Tag Essentials</h2>
        <p className="mb-6">Every 'page' view needs to update the document title and meta description dynamically. We use React Helmet or similar tools to ensure that when a user lands on a blog post, the browser tab says the article title, not just 'Home'.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Sitemaps are Crucial</h2>
        <p className="mb-6">Since crawlers might not execute every click interaction, a robust <code>sitemap.xml</code> is non-negotiable. It gives the search engine a map of every route you want indexed, ensuring nothing gets left behind.</p>
      </>
    )
  },
  'scaling-brand-identity': {
    title: "Scaling Your Brand Identity Digitally",
    category: "Branding",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">Your logo is not your brand. Your brand is the feeling users get when they interact with any touchpoint of your business. In the digital age, scaling this identity requires a robust Design System.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Consistency Builds Trust</h2>
        <p className="mb-6">If your Instagram uses one font and your website uses another, you fracture your brand voice. Digital consistency—using the same color tokens, spacing, and typographic hierarchy across all platforms—builds subconscious trust.</p>
      </>
    )
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Default to something if not found (in a real app, show 404)
  const article = id && blogData[id as keyof typeof blogData] ? blogData[id as keyof typeof blogData] : blogData['future-of-web-design'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Home
      </Link>

      <div className="mb-8">
        <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">{article.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">{article.title}</h1>

        <div className="flex items-center gap-6 text-gray-400 text-sm border-b border-white/10 pb-8">
          <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
          <span className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</span>
          <button className="flex items-center gap-2 ml-auto hover:text-white transition-colors">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      <div className="w-full h-[400px] md:h-[500px] mb-12 rounded-3xl overflow-hidden relative">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1110] via-transparent to-transparent opacity-50"></div>
      </div>

      <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed font-light">
        {article.content}
      </article>

      {/* Basic "Next Article" Mockup */}
      <div className="mt-20 pt-10 border-t border-white/10">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Read Next</p>
        <Link to="/blog/seo-optimization-spa" className="text-2xl font-medium hover:text-orange-500 transition-colors">
          SEO Optimization for Modern Single-Page Apps →
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
