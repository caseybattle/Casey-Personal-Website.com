import React from 'react';
import { CircularTestimonials } from './ui/circular-testimonials';

const testimonials = [
    {
        quote: "The team transformed our digital presence completely. Professional, creative, and extremely detailed oriented.",
        name: "Sarah Chen",
        designation: "CEO, TechFlow",
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        srcSet: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=70&w=300&auto=format&fit=crop 300w, https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop 600w"
    },
    {
        quote: "Outstanding work from start to finish. The design perfectly captures our vision and user experience has dramatically improved.",
        name: "Michael Ross",
        designation: "CTO, DataVerse",
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        srcSet: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=70&w=300&auto=format&fit=crop 300w, https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop 600w"
    },
    {
        quote: "Casey understood our brand immediately and delivered a website that exceeded our highest expectations. A truly premium experience.",
        name: "Elena Rodriguez",
        designation: "Founder, Luxe",
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=75&w=600&auto=format&fit=crop",
        srcSet: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=70&w=300&auto=format&fit=crop 300w, https://images.unsplash.com/photo-1580489944761-15a19d654956?q=75&w=600&auto=format&fit=crop 600w"
    },
    {
        quote: "Working directly with the developer was a game changer. No support tickets, just results.",
        name: "David Kim",
        designation: "Marketing Director, Bolt",
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=75&w=600&auto=format&fit=crop",
        srcSet: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=70&w=300&auto=format&fit=crop 300w, https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=75&w=600&auto=format&fit=crop 600w"
    },
    {
        quote: "The strategic insight into our local market was invaluable. More than just a website, it's a growth engine.",
        name: "Jameson Clarke",
        designation: "Founder, Urban & Co.",
        src: "/images/testimonial-5.png",
        srcSet: "/images/testimonial-5.png 300w, /images/testimonial-5.png 600w"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-black border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-center mb-12">
                    <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">Testimonials</p>
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

                {/* CTA Strip */}
                <div className="w-full mt-20 pt-10 border-t border-white/10 flex flex-col items-center justify-center gap-6">
                    <p className="text-gray-400 text-sm uppercase tracking-widest">Ready to build something great?</p>
                    <a href="https://forms.gle/LdCauvSVfbuyZyiB7" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">Book a Free Consult</a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;