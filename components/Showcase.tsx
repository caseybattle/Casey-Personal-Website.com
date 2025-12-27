import React, { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
    { id: 1, title: "Modern Design System", category: "Web Design", src: "/videos/project-1.mp4" },
    { id: 2, title: "Production Studio", category: "Brand Identity", src: "/videos/project-2.mp4" },
    { id: 3, title: "Interactive Portfolio", category: "Development", src: "/videos/project-3.mp4" },
    // Repeats for visual density if needed, or stick to 3
    { id: 4, title: "E-Commerce Experience", category: "Web App", src: "/videos/project-1.mp4" },
];

const VideoCard = ({ video }: { video: any }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.5, zIndex: 50, transition: { duration: 0.3, ease: "easeOut" } }}
            onViewportEnter={() => setIsLoaded(true)}
            className="group relative w-[500px] h-[280px] bg-[#1a1c1b] rounded-2xl overflow-hidden border border-white/5 cursor-pointer hover:border-white/40 shadow-lg mx-6 flex-shrink-0"
        >
            {/* Video Player */}
            <div className="absolute inset-0 w-full h-full bg-[#1a1c1b]">
                {isLoaded && (
                    <video
                        src={video.src}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                    />
                )}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
                >
                    <Play fill="white" className="ml-1 text-white" size={32} />
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{video.category}</span>
                    <h3 className="text-2xl font-medium text-white mt-1 group-hover:text-white/90 transition-colors">{video.title}</h3>
                </div>
            </div>
        </motion.div>
    )
};

const Showcase: React.FC = () => {
    return (
        <section id="work" className="py-24 bg-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-6xl font-medium mb-4">Featured <span className="text-gray-500">Work</span></h2>
                    <p className="text-gray-400 max-w-md">
                        A curated selection of visual stories and digital experiences, captured in motion.
                    </p>
                </div>
                <div className="hidden md:block">
                    <button className="text-sm font-medium text-white border-b border-white pb-1 hover:text-gray-300 transition-colors">View All Projects</button>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-x-hidden py-16 md:py-24">
                <div className="flex animate-marquee hover:pause items-center">
                    {/* Double the list for infinite loop effect */}
                    {[...videos, ...videos, ...videos].map((video, idx) => (
                        <VideoCard key={`${video.id}-${idx}`} video={video} />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Showcase;
