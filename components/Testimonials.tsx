import React from 'react';
import { CircularTestimonials } from './ui/circular-testimonials';

const testimonials = [
    {
        quote: "The team transformed our digital presence completely. Professional, creative, and extremely detailed oriented.",
        name: "Sarah Chen",
        designation: "CEO, TechFlow",
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
    },
    {
        quote: "Outstanding work from start to finish. The design perfectly captures our vision and user experience has dramatically improved.",
        name: "Michael Ross",
        designation: "CTO, DataVerse",
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop"
    },
    {
        quote: "A truly premium experience. They understood our brand immediately and delivered a website that exceeded our highest expectations.",
        name: "Elena Rodriguez",
        designation: "Founder, Luxe",
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
        quote: "Fast, efficient, and creatively brilliant. The new site has already increased our conversion rates by 40%.",
        name: "David Kim",
        designation: "Marketing Director, Bolt",
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-black border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-center mb-12">
                    <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl font-medium">WHAT CLIENTS SAY</h2>
                </div>

                <div className="w-full flex justify-center">
                    <CircularTestimonials
                        testimonials={testimonials}
                        autoplay={true}
                        colors={{
                            name: "#f7f7ff",
                            designation: "#a1a1aa",
                            testimony: "#e4e4e7",
                            arrowBackground: "#1a1c1b",
                            arrowForeground: "#ffffff",
                            arrowHoverBackground: "#00A6FB",
                        }}
                        fontSizes={{
                            name: "1.5rem",
                            designation: "1rem",
                            quote: "1.25rem",
                        }}
                    />
                </div>

                {/* Footer Stats Strip */}
                <div className="w-full mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="bg-[#111] p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 border border-white/5">
                        <div className="text-3xl font-bold text-white">98%</div>
                        <p className="text-gray-500 text-sm">Client satisfaction rate<br />based on feedback</p>
                    </div>
                    <div className="bg-[#111] p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 border border-white/5">
                        <div className="text-3xl font-bold text-white">150+</div>
                        <p className="text-gray-500 text-sm">Successful projects<br />delivered globally</p>
                    </div>
                    <div className="bg-[#111] p-6 rounded-2xl flex flex-col items-center justify-center md:items-start border border-white/5">
                        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">Start Project</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;