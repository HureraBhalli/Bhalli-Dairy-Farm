import './Footer.css';

const Footer = () => {

  // ✅ Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">

      {/* ========== DECORATIVE BACKGROUND ========== */}
      <div className="footer-decoration">
        <img src="/House.svg" alt="House" className="footer-house-img" />
      </div>

      {/* ========== FOOTER CONTENT ========== */}
      <div className="footer-container">

        <div className="footer-top">

          {/* Column 1: Text + Awards */}
          <div className="footer-col footer-col-about">
            <p className="footer-about-text">
              Our farm is dedicated to sustainable cattle rearing, producing
              high-quality dairy & beef while prioritizing animal welfare, soil
              health, & carbon footprint reduction.
            </p>

            {/* Awards Row */}
            <div className="footer-awards">
              <img src="/award1.svg" alt="Ultra Best Quality Winner" className="award-svg" />
              <img src="/award2.svg" alt="Farmers Certified Winner" className="award-svg" />
              <img src="/award3.svg" alt="Hyper Best" className="award-svg" />
            </div>
          </div>

          {/* Column 2: Essential Pages */}
          <div className="footer-col">
            <h4 className="footer-col-title">ESSENTIAL PAGES</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('about')}>About company</a></li>
              <li><a onClick={() => scrollToSection('expertise')}>Our Expertise</a></li>
              <li><a onClick={() => scrollToSection('why')}>Why Choose Us</a></li>
              <li><a onClick={() => scrollToSection('farm')}>Farm Overview</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Get in touch</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links (Social Media) */}
          <div className="footer-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="https://www.facebook.com/share/19N1nCvsyZ/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/bhallidairyfarm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/bhallidairyfarm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@bhallidairyfarm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ========== BOTTOM BAR ========== */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            Copyright 2026 by <a href="#">@Bhallidairyfarm</a> All rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a 
              href="https://www.facebook.com/share/19N1nCvsyZ/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
              </svg>
            </a>
            <a 
              href="https://twitter.com/bhallidairyfarm" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1.5 2h6.7l4.7 6.2L18.2 2zm-1.2 18h1.8L7 3.9H5.1L17 20z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/bhallidairyfarm" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@bhallidairyfarm" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                <path d="M23 12s0-3.5-.4-5.2c-.3-1-1-1.7-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.6.4c-1 .3-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.3 1 1 1.7 2 2 1.7.4 8.6.4 8.6.4s6.9 0 8.6-.4c1-.3 1.7-1 2-2 .4-1.7.4-5.2.4-5.2zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;