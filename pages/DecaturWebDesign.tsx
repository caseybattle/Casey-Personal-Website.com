import React, { useEffect } from 'react';
import LocalHero from '../components/LocalHero';
import Showcase from '../components/Showcase';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const DecaturWebDesign: React.FC = () => {
    useEffect(() => {
        document.title = "Web Design Decatur GA | Casey Battle";
    }, []);

    return (
        <>
            <LocalHero
                city="Decatur"
                subtitle="Custom web design for Decatur businesses. I build fast, SEO-optimized sites that help local Decatur brands stand out and grow."
            />
            <Showcase />
            <Services />
            <Testimonials />
            <Pricing />
            <Blog />
            <Contact />
        </>
    );
};

export default DecaturWebDesign;
