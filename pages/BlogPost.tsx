import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const blogData = {
  'future-of-web-design': {
    title: "The Future of Web Design: Immersive Experiences",
    description: "Discover why 2026 is the year of micro-interactions and 3D web elements with Battle Labs.",
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
    description: "Learn how to rank your React SPA #1 on Google without sacrificing performance.",
    category: "Development",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">Single-Page Applications (SPAs) are beloved for their smooth, app-like feel. But partially rendering content with JavaScript has historically been a nightmare for SEO. Google's crawlers have gotten smarter, but you still need to help them out.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Meta Tag Essentials</h2>
        <p className="mb-6">Every 'page' view needs to update the document title and meta description dynamically. We use React Helmet to ensure that when a user lands on a blog post, the browser tab says the article title, not just 'Home'.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Sitemaps are Crucial</h2>
        <p className="mb-6">Since crawlers might not execute every click interaction, a robust <code>sitemap.xml</code> is non-negotiable. It gives the search engine a map of every route you want indexed, ensuring nothing gets left behind.</p>
      </>
    )
  },
  'web-design-cost-2026': {
    title: "The Real Cost of a Premium Website in 2026",
    description: "What determines the price of a high-end website? A transparent breakdown of value, ROI, and technical depth.",
    category: "Business",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">One of the most common questions I get is: "Why does one website cost $500 while another costs $15,000?" In 2026, the answer lies in the technical performance and the strategy behind the design.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">DIY vs. Strategic Partnership</h2>
        <p className="mb-6">A $500 site is usually a template populated with photos. A $15,000 site is a growth engine. It includes custom SEO architecture, high-conversion copywriting, and unique interactions that stay in the user's mind.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Performance as an Asset</h2>
        <p className="mb-6">Every millisecond of load time has a literal dollar value. Premium sites are built to load instantly, which directly impacts your search ranking and your ad spend efficiency.</p>
      </>
    )
  },
  'salon-booking-payments': {
    title: "Automated Booking & Payments for Salons and Modern Studios",
    description: "How high-end studios are using custom web platforms to eliminate admin work and double earnings.",
    category: "Solutions",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">For premium salons and design studios, a website is more than a brochure—it's your front desk. If you're still taking bookings via DMs or calls, you're losing revenue to friction.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Eliminating No-Shows with Prep-Payments</h2>
        <p className="mb-6">By integrating Stripe directly into your booking flow, you can require deposits. This single change often reduces no-shows by over 90%, stabilizing your monthly income.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Professional Edge</h2>
        <p className="mb-6">A custom dashboard for your clients to manage their appointments makes your studio feel elite. It builds the "premium" brand identity that allows you to charge more than the competition.</p>
      </>
    )
  },
  'tutor-platform-strategy': {
    title: "Beyond Zoom: Building Custom Platforms for Online Tutors",
    description: "Scale your education brand with custom student portals, automated scheduling, and direct payments.",
    category: "Education",
    date: "Jan 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">The world of online education is saturated. To stand out as a top-tier tutor or educator, you need a digital home that is as professional as your curriculum.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Student Experience Portal</h2>
        <p className="mb-6">Giving students a central place to access recordings, notes, and homework—without using third-party logins from competitors—keeps them inside your ecosystem and builds long-term loyalty.</p>
      </>
    )
  },
  'atlanta-web-design-roots': {
    title: "Atlanta Roots, Global Standards: My Journey in Web Design",
    description: "How growing up in Atlanta and graduating locally shaped my approach to world-class digital design.",
    category: "Personal Story",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">I didn't just move to Atlanta; I grew up here. My journey in web design started right after graduating from college here in Georgia, and since then, I've watched the tech landscape of our city transform into a global powerhouse.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Scale Locally, Reach Globally</h2>
        <p className="mb-6">When I started, I realized that while many local businesses were thriving, their digital presence was stuck in the past. My goal was simple: bring world-class, premium design to both the local heroes of Atlanta and the businesses looking to scale their reach far beyond Georgia's borders.</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Why Hybrid Knowledge Matters</h2>
        <p className="mb-6">Building a website today requires a dual focus. You need to resonate with your local community—whether you're in Decatur, Buckhead, or Alpharetta—while having the technical performance to compete on a national stage. My work bridges that gap, ensuring your brand feels "homegrown" but looks "world-class."</p>
      </>
    )
  },
  'premium-design-growth': {
    title: "High-Performance Web Design: Why Quality Outperforms Generic Builders",
    description: "Stop losing clients to slow load times. Learn why custom React sites beat Wix and Squarespace for SEO.",
    category: "Strategy",
    date: "Dec 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">For high-growth businesses—from the tech hubs of North Georgia to the startup scenes across the country—the temptation to use a generic "website builder" like Wix or Squarespace is strong. It's fast, but is it enough to win on page #1 of Google?</p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Performance Gap</h2>
        <p className="mb-6">Generic builders are built for everyone, which means they are optimized for no one. Custom-coded sites consistently outrank templated sites. Whether you're targeting clients in Roswell and Sandy Springs or reaching a nationwide audience, speed is your primary sales tool.</p>
      </>
    )
  },
  'georgia-tech-branding': {
    title: "The 2026 Guide to Tech Branding & Web Design in Georgia",
    description: "A deep dive into how Georgia brands are scaling nationally with premium design and tech branding.",
    category: "Regional Insights",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">The "Silicon Peach" is no longer a nickname—it's a reality. From Gwinnett to Sandy Springs, the Georgia tech corridor is exploding. Here is how local brands are using premium design to scale nationally.</p>
      </>
    )
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = id && blogData[id as keyof typeof blogData] ? blogData[id as keyof typeof blogData] : blogData['future-of-web-design'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // JSON-LD for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": "Battle Labs"
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <Helmet>
        <title>{article.title} | Battle Labs Insights</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://battlelabs.co/blog/${id}`} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

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
