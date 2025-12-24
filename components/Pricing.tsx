import React from 'react';
import { Check } from 'lucide-react';
import Magnetic from './Magnetic';
import Reveal from './Reveal';

interface PlanProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlight: boolean;
  tag?: string;
}

const plans: PlanProps[] = [
  {
    name: "Essentials",
    description: "Perfect for new businesses",
    price: "$750",
    features: ["Landing Page", "Mobile Responsive", "Contact Form", "Basic SEO"],
    highlight: false
  },
  {
    name: "Standard",
    description: "For growing brands",
    price: "$1,800",
    features: ["Up to 5 Pages", "CMS Integration", "Custom Animations", "Social Media Integration"],
    highlight: true,
    tag: "Best Value"
  },
  {
    name: "Premium",
    description: "Full custom solution",
    price: "$3,500",
    features: ["Unlimited Pages", "E-commerce Ready", "Advanced Interactions", "Priority Support"],
    highlight: false
  }
];

const PricingCard: React.FC<{ plan: PlanProps }> = ({ plan }) => {
  return (
    <div
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

      <div className="flex flex-col items-start gap-1 mb-8">
        <span className="text-4xl font-semibold">{plan.price}</span>
        <span className="text-sm text-gray-500 font-medium">starting at</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-white text-black' : 'bg-gray-800 text-gray-400'}`}>
              <Check size={12} strokeWidth={3} />
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
                            block w-full py-3 rounded-full font-medium transition-colors text-center
                            ${plan.highlight
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-transparent border border-white/20 text-white hover:bg-white/10'}
                            `}
          >
            Get Started
          </a>
        </Magnetic>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-aura-dark">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-white/5">Pricing</span>
              <h2 className="text-4xl md:text-5xl font-medium mt-6 mb-4">Transparent plans for <br />your growth</h2>
            </div>
            <p className="text-gray-400 max-w-sm text-right md:text-left mt-4 md:mt-0">
              Professional quality at startup-friendly rates. No hidden fees, just great design.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={index * 0.2} width="100%" className="h-full">
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
