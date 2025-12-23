import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "FinTech Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    title: "Health Tracker",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    title: "Analytics Dashboard",
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop", // Reusing for layout demo, typically different
    imageStyle: "object-right", // Focus on different part
    colSpan: "md:col-span-1",
  },
  {
    title: "Luxury Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  }
];

const Work: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-aura-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">Featured Projects</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              Recent Design <br /> Work
            </h2>
            <p className="text-gray-400 max-w-md mt-6 text-sm leading-relaxed">
              We transform ideas into stunning digital experiences that captivate audiences and drive results.
            </p>
            <div className="flex gap-2 mt-8">
              {['Web Design', 'Mobile Apps', 'Brand Identity'].map((tag, i) => (
                <button key={i} className={`px-4 py-2 rounded-full text-xs border ${i===0 ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:border-white hover:text-white'} transition-colors`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all group">
            View All Projects
            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`group relative rounded-3xl overflow-hidden h-[400px] bg-gray-900 border border-white/5 ${project.colSpan}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 ${project.imageStyle || ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium w-fit mb-3 border border-white/10">
                  {project.category}
                </span>
                <h3 className="text-2xl font-medium">{project.title}</h3>
              </div>
              
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                 <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;