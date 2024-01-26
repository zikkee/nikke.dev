import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

import '../Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-sky-600 text-3xl font-bold select-none">NIKKEDEV</Link>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="text-white" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="text-white" onClick={closeMenu}>Contact</Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="navbar-animation"
          unmountOnExit
        >
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 p-4">
            <Link to="/" className="block text-white mb-2" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="block text-white mb-2" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="block text-white mb-2" onClick={closeMenu}>Contact</Link>
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
}

export default Navbar;
