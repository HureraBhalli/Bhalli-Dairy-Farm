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
              Cattle are rotated across pastures to prevent overgrazing, promote soil health, and sequester carbon.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <div className="why-card-icon">
              <img src="/why2.svg" alt="Organic food" className="why-icon-img" />
            </div>
            <h3 className="why-card-title">Organic food</h3>
            <p className="why-card-text">
              Rotational grazing helps prevent overgrazing, improve soil quality, and support carbon sequestration.
            </p>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <div className="why-card-icon">
              <img src="/why3.svg" alt="Biodiversity protection" className="why-icon-img" />
            </div>
            <h3 className="why-card-title">Biodiversity protection</h3>
            <p className="why-card-text">
              Cattle are moved between pastures to avoid overgrazing, enhance soil fertility.
            </p>
          </div>

          {/* Card 4 */}
          <div className="why-card">
            <div className="why-card-icon">
              <img src="/why4.svg" alt="Technology-powered barns" className="why-icon-img" />
            </div>
            <h3 className="why-card-title">Technology-powered barns</h3>
            <p className="why-card-text">
              By shifting cattle across pastures, we maintain soil health, reduce overgrazing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;