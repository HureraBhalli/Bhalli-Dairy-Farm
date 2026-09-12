import './ExpertiseSection.css';

const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        
        {/* ========== HEADER ========== */}
        <div className="expertise-header">
          <span className="expertise-label">02. OUR EXPERTISE</span>
          <h2 className="expertise-heading">
            Our practices: how we<br />farm differently
          </h2>
        </div>

        {/* ========== 4 CARDS ========== */}
        <div className="expertise-grid">
          
          {/* Card 1: Crop Firms */}
          <div className="expertise-card">
            <div className="expertise-image">
              <img 
                src="/P1.png" 
                alt="Crop Firms" 
              />
              
            </div>
            <h3 className="expertise-card-title">Crop firms</h3>
          </div>

          {/* Card 2: Protein Thing */}
          <div className="expertise-card">
            <div className="expertise-image">
              <img 
                src="/P2.png" 
                alt="Protein Thing" 
              />
            </div>
            <h3 className="expertise-card-title">Protein thing</h3>
          </div>

          {/* Card 3: Farm House */}
          <div className="expertise-card">
            <div className="expertise-image">
              <img 
                src="/P3.png" 
                alt="Farm House" 
              />
            </div>
            <h3 className="expertise-card-title">Farm house</h3>
          </div>

          {/* Card 4: Farm Products */}
          <div className="expertise-card">
            <div className="expertise-image">
              <img 
                src="/P4.png" 
                alt="Farm Products" 
              />
            </div>
            <h3 className="expertise-card-title">Farm products</h3>
          </div>

        </div>

        {/* ========== CONTACT US BUTTON ========== */}
        <div className="expertise-btn-wrapper">
          <button className="expertise-btn">CONTACT US</button>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;