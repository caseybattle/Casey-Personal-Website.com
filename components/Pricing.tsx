import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "For small projects",
    price: "$2,500",
    period: "/project",
    features: ["Up to 5 pages", "Responsive design", "Custom animations", "Priority support"],
    cta: "Get started",
    highlight: false
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "$7,500",
    period: "/project",
    features: ["Up to 15 pages", "Custom animations", "CMS integration", "Priority support"],
    cta: "Start project",
    highlight: true,
    tag: "Most popular"
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    features: ["Unlimited pages", "Advanced features", "Dedicated team", "24/7 support"],
    cta: "Contact sales",
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-aura-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-white/5">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-medium mt-6 mb-4">Simple plans for <br/>every need</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-right md:text-left mt-4 md:mt-0">
            Choose the perfect package for your project. Flexible pricing, exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                relative p-8 rounded-3xl border flex flex-col h-full
                ${plan.highlight 
                  ? 'bg-gradient-to-b from-[#1a1a1a] to-black border-white/20' 
                  : 'bg-black border-white/5'}
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                  {plan.tag}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white text-black' : 'bg-gray-800 text-gray-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`
                  w-full py-3 rounded-full font-medium transition-colors
                  ${plan.highlight 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-transparent border border-white/20 text-white hover:bg-white/10'}
                `}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;