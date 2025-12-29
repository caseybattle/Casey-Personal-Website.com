import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import BlogArchive from './pages/BlogArchive';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-aura-dark text-white font-sans selection:bg-orange-500 selection:text-white cursor-none">
        <Cursor />
        <SpeedInsights />
        <Analytics />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogArchive />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;