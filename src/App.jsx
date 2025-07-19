import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

// Pages
import WhoWeAre from './pages/WhoWeAre';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import ServicesPage from './pages/ServicesPage';

function Home() {
  return (
    <>
      <HeroBanner />
      <Services />
      <AboutUs />
      <Reviews />
      <WhyChooseUs />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
