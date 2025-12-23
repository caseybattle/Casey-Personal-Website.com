import React from 'react';
import { Layers, Code, Palette, LineChart } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-aura-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-medium">Services we offer</h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg">
            From concept to launch, we deliver end-to-end design solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Service 1: UI/UX Design */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-white">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-4">UI/UX Design</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              User-centered design that combines aesthetics with functionality. We create intuitive interfaces that enhance user satisfaction.
            </p>
            
            {/* Visual: Process Steps */}
            <div className="flex justify-between items-center relative py-4 px-2">
              {/* Line background */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-800 -z-10"></div>
              
              {['Research', 'Wireframe', 'Prototype', 'Testing', 'Launch'].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3 bg-[#141414] px-1 z-10">
                   <div className={`w-3 h-3 rounded-full border-2 ${i < 3 ? 'bg-orange-500 border-orange-500' : 'bg-[#141414] border-gray-600'}`}></div>
                   <span className="text-[10px] text-gray-500 font-medium hidden sm:block">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 2: Development */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-white">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-medium mb-4">Development</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Pixel-perfect implementation with clean, maintainable code using modern frameworks.
                </p>

                <div className="bg-black/50 rounded-xl p-4 font-mono text-xs text-gray-400 border border-white/5">
                  <div className="flex gap-2 mb-2">
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <span className="ml-2 opacity-50">Rect/Next.js</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-2 rounded bg-white/5">
                        <span>React/Next.js</span>
                        <span className="text-green-500">Pro</span>
                    </div>
                     <div className="flex items-center justify-between p-2 rounded hover:bg-white/5">
                        <span>Tailwind CSS</span>
                    </div>
                     <div className="flex items-center justify-between p-2 rounded hover:bg-white/5">
                        <span>Animations</span>
                    </div>
                     <div className="flex items-center justify-between p-2 rounded hover:bg-white/5">
                        <span>Performance</span>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/10 blur-[80px] rounded-full pointer-events-none"></div>
          </div>

          {/* Service 3: Branding */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-white">
              <Palette size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-4">Branding</h3>
            <p className="text-gray-400 mb-6">
              Building strong digital identities that resonate with your audience.
            </p>
            <div className="space-y-3">
               {['Logo Design', 'Style Guide', 'Marketing Assets'].map((item) => (
                 <div key={item} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-sm">{item}</span>
                    <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                       <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-white rounded-full"></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Service 4: Strategy */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-2">
                 <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Strategy & Consulting</span>
            </div>
            <h3 className="text-3xl font-medium mb-6 mt-2">Transform your vision into reality</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Strategic guidance from discovery to execution. We help you define goals, understand users, and create roadmaps for success.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
               <div className="mt-1">
                   <LineChart size={20} className="text-orange-400" />
               </div>
               <div>
                  <h4 className="font-medium text-orange-100">Growth Driven</h4>
                  <p className="text-xs text-orange-200/60 mt-1">Drive measurable growth and engagement.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;