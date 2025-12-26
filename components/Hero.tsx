import React from 'react';
import { Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const clients = [
    { name: "ORBIT", className: "font-serif tracking-widest font-bold" },
    { name: "NEXUS", className: "font-sans font-black tracking-tighter" },
    { name: "Velvet", className: "font-display italic text-2xl" },
    { name: "VORTEX", className: "font-mono font-bold tracking-tight" },
    { name: "Flux", className: "font-sans font-semibold italic" },
    { name: "Sol", className: "font-serif font-medium" },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Creative Office - Web Design Agency Atlanta"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#182e28] via-[#1a1a1a]/80 to-[#c26d2b]/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1110] via-transparent to-transparent"></div>
      </div>

      {/* Main Layout Container - Grid for strict side-by-side on Tablet+ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-20 items-center">

        {/* Left Content (Title & Text) */}
        <div className="flex flex-col justify-center animate-fade-in order-1">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full w-fit mb-8 animate-fade-in">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-red-400">Booking for Jan '26 - 2 Spots Left</span>
          </div>

          <h1
            className="font-display font-medium tracking-tight leading-[1.05] mb-10 mx-auto"
            style={{
              textWrap: 'balance',
              fontSize: 'clamp(2.5rem, 5vw + 1rem, 5.5rem)'
            }}
          >
            <span className="text-white">High-Performance </span>
            <span className="text-gray-400 italic">Web Design & SEO</span>
            <span className="text-white"> by a </span>
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Seasoned Developer
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            Stop paying for agency overhead. Work directly with an expert to build a lightning-fast, custom website that ranks higher on Google and turns visitors into paying clients.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://forms.gle/LdCauvSVfbuyZyiB7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
            >
              Book a Free Consult
            </a>
          </div>
        </div>

        {/* Right Content (Stacked Cards) - Strictly to the right */}
        <div className="flex flex-col items-center md:items-end justify-center relative order-2">

          {/* Card Wrapper - ensuring consistent width */}
          <div className="relative w-full max-w-xl flex flex-col">

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[120%] bg-orange-500/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            {/* Main Stats Card (50+) */}
            <div className="w-[85%] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-fade-in relative z-10 self-start -translate-x-8 hover:scale-[1.02] transition-transform duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                  <div className="w-1 h-3 bg-white rounded-full mx-0.5"></div>
                  <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                </div>
                <div className="text-right">
                  <h3 className="text-3xl font-semibold">50+</h3>
                  <p className="text-xs text-gray-400">Successful Launches</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Priority Support</span>
                  <span className="font-semibold text-green-400">Direct Access</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Hand-Coded Quality</p>
                  <p className="text-[10px] text-gray-500">No Page Builders</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <div className="text-lg font-bold">5+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-lg font-bold">24/7</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Support</div>
              </div>
              <div>
                <div className="text-lg font-bold">100%</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Quality</div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-semibold border border-green-500/30 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> ACTIVE
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-[10px] font-semibold border border-purple-500/30 flex items-center gap-1">
                <Star size={8} fill="currentColor" /> PREMIUM
              </span>
            </div>
          </div>

          {/* Featured Clients Carousel - Positioned Below */}
          <div className="relative z-20 w-[110%] self-end translate-x-8 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-fade-in overflow-hidden hover:border-white/20 transition-colors mt-2" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 pl-2">Featured Clients</p>
            <div className="relative flex overflow-hidden w-full mask-linear">
              <div className="flex items-center gap-8 animate-carousel whitespace-nowrap">
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <span key={index} className={`text-white/80 text-lg ${client.className}`}>
                    {client.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Inline Styles for the Carousel Animation */}
      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-carousel {
          animation: carousel 20s linear infinite;
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        /* Fade mask for smooth edges */
        .mask-linear {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Hero;