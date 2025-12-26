import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LocalHero from '../components/LocalHero';
import Showcase from '../components/Showcase';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const ServicePage: React.FC = () => {
    const { service } = useParams<{ service: string }>();

    // Format the service name (e.g., "custom-react-development" -> "Custom React Development")
    const formattedService = service
        ? service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Web Development';

    // Tailored subtitles for specific services
    const getSubtitle = (serviceName: string) => {
        const lowerService = serviceName.toLowerCase();
        if (lowerService.includes('saas')) {
            return "Scalable, high-performance UI/UX design and development for modern SaaS platforms. Build software that converts users and scales effortlessly.";
        }
        if (lowerService.includes('landing')) {
            return "High-conversion landing pages designed to turn visitors into customers. Fast, mobile-responsive, and psychologically optimized for sales.";
        }
        if (lowerService.includes('react')) {
            return "Enterprise-grade React.js development. I build complex, fluid web applications with a focus on speed, accessibility, and clean code.";
        }
        return `Premium ${serviceName} solutions for forward-thinking brands. I combine elite design with modern technology to build digital experiences that drive growth.`;
    };

    useEffect(() => {
        document.title = `${formattedService} | Premium Web Design & Development | Battle Labs`;
        window.scrollTo(0, 0);
    }, [formattedService]);

    return (
        <main className="bg-[#0f1110]">
            <LocalHero
                city={formattedService}
                subtitle={getSubtitle(formattedService)}
            />

            <Showcase />
            <Services />
            <Testimonials />
            <Pricing />
            <Blog />
            <Contact />
        </main>
    );
};

export default ServicePage;
