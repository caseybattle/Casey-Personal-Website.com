import React from 'react';
import { Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const clients = [
    { name: "Sweet Bakes", className: "font-serif tracking-widest font-bold" },
    { name: "Bookaver", className: "font-sans font-black tracking-tighter" },
    { name: "Shavonne Styles", className: "font-display italic text-2xl" },
    { name: "Rashunda Fit", className: "font-mono font-bold tracking-tight" },
    { name: "Battle Labs", className: "font-sans font-semibold italic" },
    { name: "CLX Studios", className: "font-serif font-medium" },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center overflow-hidden">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Left-heavy gradient — keeps text readable, lets video breathe on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1110]/95 via-[#182e28]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1110] via-transparent to-transparent"></div>
      </div>

      {/* Main Content — centered, full width */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-10 animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-red-400">Now Accepting New Clients</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-medium tracking-tight leading-[1.05] mb-8"
          style={{
            textWrap: 'balance',
            fontSize: 'clamp(3rem, 6vw + 1rem, 7rem)',
            textShadow: '0 2px 30px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,1)'
          }}
        >
          <span className="text-white">High-Performance </span>
          <span className="text-gray-300 italic">Web Design</span>
          <span className="text-white"> & </span>
          <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            SEO that Converts
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
          Stop paying for agency overhead. Work directly with an expert to build a lightning-fast, custom website that ranks higher on Google and turns visitors into paying clients.
        </p>

        {/* CTA */}
        <a
          href="https://forms.gle/LdCauvSVfbuyZyiB7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-10 py-4 rounded-full font-medium text-base hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.15)] mb-14"
        >
          Book a Free Consult
        </a>

        {/* Slim stat pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#4ade80]"></div>
            <span className="text-xs text-gray-300 tracking-wide">Accepting Clients</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs text-gray-300 tracking-wide">5+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs text-gray-300 tracking-wide">100% Quality Guarantee</span>
          </div>
        </div>

        {/* Full-width client ticker */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-white/5 pt-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-4">Featured Clients</p>
          <div className="relative flex overflow-hidden w-full mask-linear">
            <div className="flex items-center gap-10 animate-carousel whitespace-nowrap">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <span key={index} className={`text-white/50 text-base ${client.className}`}>
                  {client.name}
                </span>
              ))}
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