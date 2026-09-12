import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* ========== LEFT COLUMN ========== */}
        <div className="why-left">
          <div className="why-header">
            <span className="why-label">03. WHY CHOOSE US</span>
            <h2 className="why-heading">
              Grass-fed, free-range<br />
              cattle with access to<br />
              open pastures
            </h2>
          </div>

          <div className="why-image-wrapper">
            <img src="/Village.png" alt="Open pastures" className="why-image" />
            <div className="why-image-badge">
              <div className="badge-circle">
                <span>🌿</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== RIGHT COLUMN ========== */}
        <div className="why-right">

          {/* Card 1 */}
          <div className="why-card">
            <div className="why-card-icon">
              <img src="/why1.svg" alt="Rotational grazing" className="why-icon-img" />
            </div>
            <h3 className="why-card-title">Rotational grazing</h3>
            <p className="why-card-text">
              We rotate cattle between pastures to support healthy grass, better soil, and sustainable farming.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <div className="why-card-icon">
              <img src="/why2.svg" alt="Organic food" className="why-icon-img" />
            </div>
            <h3 className="why-card-title">Organic food</h3>
            <p className="why-card-text">
             We provide naturally produced dairy products made with care, quality, and responsible farming practices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <div className="why-card-icon">
              <img src="/why3.svg" alt="Biodiversity protection" className="why-icon-img" />
            </div>
            <h3 className="why-card-title">Biodiversity protection</h3>
            <p className="why-card-text">
              Our farming practices help protect natural habitats and support a healthy, balanced ecosystem.
            </p>
          </div>

          {/* Card 4 */}
          <div className="why-card">
            <div className="why-card-icon">
              <img src="/why4.svg" alt="Technology-powered barns" className="why-icon-img" />
            </div>
            <h3 className="why-card-title">Technology-powered barns</h3>
            <p className="why-card-text">
             Modern barn technology helps us maintain better animal care, hygiene, comfort, and milk quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;