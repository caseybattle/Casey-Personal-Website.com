import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import BlogArchive from './pages/BlogArchive';
import LocationPage from './pages/LocationPage';
import ServicePage from './pages/ServicePage';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-aura-dark text-white font-sans selection:bg-orange-500 selection:text-white cursor-none">
        <Cursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogArchive />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/web-design-:city-ga" element={<LocationPage />} />
            <Route path="/services/:service" element={<ServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;