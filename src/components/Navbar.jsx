import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <div className="logo-circle">
            <img src="/Logo.png" alt="Logo" />
          </div>
        </div>

        {/* Menu */}
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('home')}>HOME</a>
          <a onClick={() => scrollToSection('about')}>ABOUT</a>
          <a onClick={() => scrollToSection('expertise')}>OUR EXPERTISE</a>
          <a onClick={() => scrollToSection('farm')}>FARM OVERVIEW</a>
          <a onClick={() => scrollToSection('why')}>WHY CHOOSE US</a>
          <button className="contact-btn mobile-btn" onClick={() => scrollToSection('contact')}>
            CONTACT US
          </button>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="navbar-btn-wrapper">
          <button className="contact-btn" onClick={() => scrollToSection('contact')}>
            CONTACT US
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;