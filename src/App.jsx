import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import FloatingWhatsApp from './components/FloatingWhatsapp'; 

import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Aboutus from './pages/Aboutus';
import Projects from './pages/Projects';
import ServicesPage from './pages/ServicesPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <Navigation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingContact />
        <FloatingWhatsApp /> 
      </div>
    </Router>
  );
}

export default App;
