import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import ServicesPage from './pages/ServicesPage';

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
