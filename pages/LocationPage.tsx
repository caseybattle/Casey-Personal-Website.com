import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LocalHero from '../components/LocalHero';
import Showcase from '../components/Showcase';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const LocationPage: React.FC = () => {
    const { city } = useParams<{ city: string }>();

    // Format the city name (e.g., "alpharetta-ga" -> "Alpharetta")
    const formattedCity = city
        ? city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').replace(' Ga', '')
        : 'Atlanta';

    // Tailored subtitles for local vs national feel
    const getSubtitle = (cityName: string) => {
        const lowerCity = cityName.toLowerCase();
        if (lowerCity === 'atlanta' || lowerCity === 'decatur') {
            return `Premium, hand-coded web design for ${cityName} businesses. I build high-performance websites that help Georgia brands outrank the competition and grow.`;
        }
        return `Custom web design and development for businesses in ${cityName}. Elevate your brand with a fast, SEO-optimized digital experience tailored to your local market.`;
    };

    useEffect(() => {
        document.title = `${formattedCity} Web Design | Premium Development | Battle Labs`;

        // Scroll to top when city changes
        window.scrollTo(0, 0);
    }, [formattedCity]);

    return (
        <main className="bg-[#0f1110]">
            <LocalHero
                city={formattedCity}
                subtitle={getSubtitle(formattedCity)}
            />

            {/* SEO Context Section (Optional: could be added later for even more local proof) */}
            <div className="hidden">
                <h2>Web Developer in {formattedCity}, GA</h2>
                <p>Looking for a website builder in {formattedCity}? Skip the generic DIY templates. I provide custom React development and professional SEO for brands in {formattedCity} and surrounding Georgia suburbs.</p>
            </div>

            <Showcase />
            <Services />
            <Testimonials />
            <Pricing />
            <Blog />
            <Contact />
        </main>
    );
};

export default LocationPage;
