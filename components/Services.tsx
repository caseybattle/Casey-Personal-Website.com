"use client";
import React, { useState } from 'react';
import { Layers, Code, Palette, LineChart, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  // State for UI/UX Steps
  const [activeStep, setActiveStep] = useState(2); // Start at Prototype
  const steps = ['Research', 'Wireframe', 'Prototype', 'Testing', 'Launch'];

  // State for Development Tabs
  const [activeTab, setActiveTab] = useState('React/Next.js');

  // State for Branding Toggles
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    'Logo Design': true,
    'Style Guide': true,
    'Marketing Assets': false,
  });

  const toggleItem = (item: string) => {
    setToggles(prev => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-aura-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-medium">Custom Website Services</h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg">
            Looking to build a website? We deliver end-to-end design and development solutions tailored to help you get more clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Service 1: UI/UX Design - Interactive Steps */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-white">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-4">Website Design</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              User-centered design that converts. We create intuitive interfaces that your customers will love.
            </p>

            {/* Interactive Process Steps */}
            <div className="flex justify-between items-center relative py-4 px-2">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-800 -z-10"></div>
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="flex flex-col items-center gap-3 bg-[#141414] px-1 z-10 group/step focus:outline-none"
                >
                  <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${i <= activeStep ? 'bg-orange-500 border-orange-500 scale-125' : 'bg-[#141414] border-gray-600 group-hover/step:border-gray-400'}`}></div>
                  <span className={`text-[10px] font-medium hidden sm:block transition-colors ${i <= activeStep ? 'text-white' : 'text-gray-500'}`}>{step}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 text-center h-6">
              <span className="text-xs text-orange-400 font-medium animate-pulse">
                {activeStep === 0 && "Analyzing user needs & market trends"}
                {activeStep === 1 && "Structuring the information architecture"}
                {activeStep === 2 && "High-fidelity visual design"}
                {activeStep === 3 && "Usability testing with real users"}
                {activeStep === 4 && "Deployment & handover"}
              </span>
            </div>
          </div>

          {/* Service 2: Development - Interactive Tabs */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-white">
                <Code size={24} />
              </div>
              <h3 className="text-2xl font-medium mb-4">Web Development</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We build websites with pixel-perfect accuracy and clean code using modern frameworks like React & Next.js.
              </p>

              <div className="bg-black/50 rounded-xl p-4 font-mono text-xs text-gray-400 border border-white/5">
                <div className="flex gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="ml-2 opacity-50">{activeTab}</span>
                </div>
                <div className="space-y-1">
                  {['React/Next.js', 'Tailwind CSS', 'Animations', 'Performance'].map((tab) => (
                    <div
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${activeTab === tab ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
                    >
                      <span>{tab}</span>
                      {activeTab === tab && <span className="text-green-500 text-[10px] uppercase font-bold">Active</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/10 blur-[80px] rounded-full pointer-events-none"></div>
          </div>

          {/* Service 3: Branding - Interactive Toggles */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-white">
              <Palette size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-4">Branding</h3>
            <p className="text-gray-400 mb-6">
              Building strong digital identities that resonate with your audience.
            </p>
            <div className="space-y-3">
              {['Logo Design', 'Style Guide', 'Marketing Assets'].map((item) => (
                <div
                  key={item}
                  onClick={() => toggleItem(item)}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all duration-300 ${toggles[item] ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                >
                  <span className={`text-sm transition-colors ${toggles[item] ? 'text-white' : 'text-gray-400'}`}>{item}</span>
                  <div className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${toggles[item] ? 'bg-green-500' : 'bg-gray-700'}`}>
                    <div className={`absolute top-0.5 bottom-0.5 w-3 bg-white rounded-full transition-all duration-300 ${toggles[item] ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service 4: Strategy */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Strategy & Consulting</span>
            </div>
            <h3 className="text-3xl font-medium mb-6 mt-2">Transform your vision into reality</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Strategic guidance from discovery to execution. We help you define goals, understand users, and create roadmaps for success.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
              <div className="mt-1">
                <LineChart size={20} className="text-orange-400 group-hover:scale-110 transition-transform duration-300" />
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