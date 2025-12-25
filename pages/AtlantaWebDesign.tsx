import React, { useEffect } from 'react';
import LocalHero from '../components/LocalHero';
import Showcase from '../components/Showcase';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const AtlantaWebDesign: React.FC = () => {
    useEffect(() => {
        document.title = "Atlanta Web Design | Casey Battle";
    }, []);

    return (
        <>
            <LocalHero
                city="Atlanta"
                subtitle="High-performance websites for Atlanta businesses. Stop paying for agency overhead and work directly with a local expert who understands the Atlanta market."
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

export default AtlantaWebDesign;
