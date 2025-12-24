import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import Magnetic from './Magnetic';
import Reveal from './Reveal';

interface PlanProps {
  name: string;
  subheadline: string;
  description: string;
  price: string;
  features: string[];
  highlight: boolean;
  tag?: string;
  mode: 'small' | 'scale';
}

const plans: PlanProps[] = [
  {
    name: "One-Page Launchpad",
    subheadline: "For Personal Brands & Local Services",
    description: "Get visible and get paid. A polished, single-page site to replace your Linktree.",
    price: "$750",
    features: ["48-Hour Turnaround", "\"Book Me\" Integration", "Instant Payment Links", "Local SEO Core", "Mobile-First Layout", "Zero Maintenance"],
    highlight: false,
    mode: 'small'
  },
  {
    name: "Authority Builder",
    subheadline: "For Growing Local Businesses",
    description: "A complete digital office. Rank higher on Google and build trust with a multi-page funnel.",
    price: "$1,800",
    features: ["5-Page Service Funnel", "CMS (Edit Yourself)", "Reputation Engine", "Speed Optimization (90+)", "Lead Capture Forms", "Analytics Dashboard"],
    highlight: true,
    tag: "MOST POPULAR",
    mode: 'small'
  },
  {
    name: "Conversion Engine",
    subheadline: "For Brands Ready to Scale",
    description: "A custom-engineered growth machine with advanced functionality, animations, and automations.",
    price: "$3,500",
    features: ["Unlimited Design System", "E-Commerce / Booking Core", "Interactive UX", "CRM Integration", "Enterprise Security", "30-Day Post-Launch Support"],
    highlight: false,
    mode: 'scale'
  }
];

const FeatureMatrix = () => (
  <div className="mt-20 overflow-x-auto">
    <table className="w-full text-left border-collapse min-w-[600px]">
      <thead>
        <tr className="border-b border-white/10">
          <th className="py-4 px-4 text-gray-400 font-medium">Feature</th>
          <th className="py-4 px-4 text-white font-medium">Launchpad ($750)</th>
          <th className="py-4 px-4 text-white font-medium">Authority ($1,800)</th>
          <th className="py-4 px-4 text-white font-medium">Conversion ($3,500)</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {[
          ["Ideal For", "Personal / Local", "Growing Business", "E-com / Startups"],
          ["Pages", "1 Page (Long Scroll)", "Up to 5 Pages", "Unlimited"],
          ["Design Level", "High-End Template", "Brand-Aligned", "Fully Custom Identity"],
          ["CMS (Edit)", "❌ (Static)", "✅ (Drag & Drop)", "✅ (Advanced Fields)"],
          ["SEO Setup", "Basic (Maps)", "Advanced On-Page", "Technical + Schema"],
          ["E-Commerce", "Payment Links", "❌", "Full Cart System"],
          ["Automation", "Email Notify", "Database", "CRM Integration"],
          ["Turnaround", "48 Hours", "2 Weeks", "4 Weeks"],
        ].map(([feature, t1, t2, t3], i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
            <td className="py-4 px-4 text-gray-400 font-medium">{feature}</td>
            <td className="py-4 px-4 text-gray-300">{t1}</td>
            <td className="py-4 px-4 text-gray-300">{t2}</td>
            <td className="py-4 px-4 text-white font-semibold">{t3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PricingCard: React.FC<{ plan: PlanProps; activeMode: 'small' | 'scale' }> = ({ plan, activeMode }) => {
  const isDimmed = activeMode !== plan.mode;
  // Highlight logic: 'Authority' is always highlighted visually unless dimmed, 
  // but we can add extra emphasis if it matches the mode.
  // For 'Scale' mode, strictly highlight the $3500 tier.

  const isHighlighted = (activeMode === 'scale' && plan.price === "$3,500") ||
    (activeMode === 'small' && plan.tag === "MOST POPULAR");

  return (
    <div
      className={`
        relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-500
        ${isHighlighted
          ? 'bg-gradient-to-b from-[#2a2a2a] to-black border-white/30 scale-105 shadow-2xl z-10'
          : 'bg-black border-white/10 hover:border-white/20'}
        ${isDimmed ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100'}
      `}
    >
      {isHighlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-lg">
          {activeMode === 'scale' ? 'Enterprise Grade' : 'Best Value'}
        </div>
      )}

      <div className="mb-8">
        <div className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">{plan.subheadline}</div>
        <h3 className="text-2xl font-medium mb-2 text-white">{plan.name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
      </div>

      <div className="flex flex-col items-start gap-1 mb-8">
        <span className="text-4xl font-semibold text-white">{plan.price}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isHighlighted ? 'bg-white text-black' : 'bg-gray-800 text-gray-500'}`}>
              <Check size={10} strokeWidth={4} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Magnetic>
          <a
            href="https://forms.gle/LdCauvSVfbuyZyiB7"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block w-full py-3.5 rounded-full font-medium transition-all text-center text-sm tracking-wide
              ${isHighlighted
                ? 'bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/5'
                : 'bg-transparent border border-white/20 text-white hover:bg-white/5'}
            `}
          >
            {activeMode === 'scale' ? 'Consult with Casey' : 'Start Project'}
          </a>
        </Magnetic>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'small' | 'scale'>('small');

  return (
    <section className="py-32 px-4 md:px-8 bg-[#0f1110] relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="mb-4 px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase bg-white/5 text-gray-400">
              Plain English Pricing
            </span>
            <h2 className="text-4xl md:text-6xl font-medium mb-6 text-white tracking-tight">
              Invest in <span className="text-gray-500">Growth</span>
            </h2>
            <p className="text-gray-400 max-w-lg text-lg">
              Stop guessing. Choose the package that matches your business stage.
            </p>

            {/* Toggle Switch */}
            <div className="mt-10 p-1 bg-white/5 rounded-full border border-white/10 inline-flex relative">
              <div
                className={`absolute top-1 bottom-1 w-[50%] bg-white/10 rounded-full transition-all duration-300 ease-out ${activeMode === 'small' ? 'left-1' : 'left-[49%]'}`}
              ></div>
              <button
                onClick={() => setActiveMode('small')}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeMode === 'small' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Small Business
              </button>
              <button
                onClick={() => setActiveMode('scale')}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeMode === 'scale' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Corporate & Scale
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%" className="h-full">
              <PricingCard plan={plan} activeMode={activeMode} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-medium text-white mb-2">Feature Comparison</h3>
            <p className="text-gray-500 text-sm">Detailed breakdown of what's included.</p>
          </div>
          <FeatureMatrix />
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
