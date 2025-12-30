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
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=60&w=1600&auto=format&fit=crop"
          srcSet="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=60&w=600&auto=format&fit=crop 600w, 
                  https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=60&w=1200&auto=format&fit=crop 1200w, 
                  https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=60&w=1600&auto=format&fit=crop 1600w"
          sizes="(max-width: 768px) 100vw, 100vw"
          alt="Modern Creative Office - Web Design Agency Battle Labs"
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
            <div className="w-[85%] bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-8 rounded-3xl shadow-2xl animate-fade-in relative z-10 self-start -translate-x-8 hover:scale-[1.02] transition-transform duration-500 group/card">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center border border-white/[0.1]">
                  <div className="flex gap-0.5 items-end h-4">
                    <div className="w-1 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-1 h-4 bg-white/80 rounded-full"></div>
                    <div className="w-1 h-3 bg-white/60 rounded-full"></div>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-4xl font-medium tracking-tight text-white">50+</h3>
                  <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1">Successful Launches</p>
                </div>
              </div>

              <div className="mb-8 relative">
                <div className="flex justify-between text-xs mb-3">
                  <span className="text-gray-400 font-medium">Availability</span>
                  <span className="font-semibold text-green-400 shadow-green-500/50 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">High Demand</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-green-500/80 to-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.3)]"></div>
                </div>
              </div>

              {/* Refined Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-6 mb-6">
                <div className="text-left">
                  <div className="text-xl font-medium tracking-tight text-white mb-1">5+</div>
                  <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Years</div>
                </div>
                <div className="text-left">
                  <div className="text-xl font-medium tracking-tight text-white mb-1">24/7</div>
                  <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Support</div>
                </div>
                <div className="text-left">
                  <div className="text-xl font-medium tracking-tight text-white mb-1">100%</div>
                  <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Quality</div>
                </div>
              </div>

              {/* Neon Glass Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1.5 rounded-full bg-green-500/[0.05] border border-green-500/20 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_-3px_rgba(34,197,94,0.1)] transition-all duration-300 group-hover/card:bg-green-500/10 group-hover/card:border-green-500/30">
                  <div className="relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-green-400 rounded-full blur-[3px] opacity-70"></div>
                  </div>
                  <span className="text-[10px] font-semibold text-green-300/90 tracking-wide uppercase">Accepting Clients</span>
                </div>

                <div className="px-3 py-1.5 rounded-full bg-purple-500/[0.05] border border-purple-500/20 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_-3px_rgba(168,85,247,0.1)] transition-all duration-300 group-hover/card:bg-purple-500/10 group-hover/card:border-purple-500/30">
                  <Star size={10} className="text-purple-400 fill-purple-400/40" />
                  <span className="text-[10px] font-bold text-purple-300/90 tracking-wide uppercase">Premium Only</span>
                </div>
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