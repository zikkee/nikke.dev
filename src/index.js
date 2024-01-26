import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Etusivu from './pages/Etusivu';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="h-screen bg-black">
        <Navbar />
        <div className="m-auto max-w-5xl mt-5">
          <Routes>
            <Route path="/" element={<Etusivu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
