import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
            <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">WHAT CLIENTS SAY</h2>
            <div className="w-full h-px bg-white/10 my-8"></div>
            <div className="flex items-center gap-4">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">←</button>
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">→</button>
            </div>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-white text-white" />)}
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    "The team transformed our digital presence completely. Professional, creative, and extremely detailed oriented."
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    <div>
                        <h4 className="font-medium">Sarah Chen</h4>
                        <p className="text-xs text-gray-500">CEO, TechFlow</p>
                    </div>
                </div>
            </div>

             <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-white text-white" />)}
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    "Outstanding work from start to finish. The design perfectly captures our vision and user experience has dramatically improved."
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                    <div>
                        <h4 className="font-medium">Michael Ross</h4>
                        <p className="text-xs text-gray-500">CTO, DataVerse</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Footer Stats Strip */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="bg-[#111] p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4">
             <div className="text-3xl font-bold">98%</div>
             <p className="text-gray-500 text-sm">Client satisfaction rate<br/>based on feedback</p>
          </div>
          <div className="bg-[#111] p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4">
             <div className="text-3xl font-bold">150+</div>
             <p className="text-gray-500 text-sm">Successful projects<br/>delivered globally</p>
          </div>
          <div className="bg-[#111] p-6 rounded-2xl flex flex-col items-center justify-center md:items-start">
             <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold">Get Started</button>
          </div>
      </div>
    </section>
  );
};

export default Testimonials;