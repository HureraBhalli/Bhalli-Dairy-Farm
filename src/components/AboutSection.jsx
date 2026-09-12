import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* ========== TOP ROW ========== */}
        <div className="about-top">
          
          {/* Left: Heading */}
          <div className="about-heading-block">
            <span className="about-label">01. ABOUT COMPANY</span>
            <h2 className="about-heading">
              Founded in 2010,<br />
              Nurturing nature, raising<br />
              responsibly
            </h2>
          </div>

          {/* Right: Rating + Paragraph */}
          <div className="about-info-block">
            
            {/* Rating */}
            <div className="rating-row">
              <div className="avatars">
                <img src="https://i.pravatar.cc/40?img=1" alt="user1" />
                <img src="https://i.pravatar.cc/40?img=2" alt="user2" />
                <img src="https://i.pravatar.cc/40?img=3" alt="user3" />
                <img src="https://i.pravatar.cc/40?img=4" alt="user4" />
              </div>
              <div className="rating-text">
                <span className="rating-number">1200+</span>
                <span className="rating-label">happy users rating</span>
              </div>
            </div>

            {/* Paragraph */}
            <p className="about-paragraph">
              Our farm is dedicated to sustainable cattle rearing, producing
              high-quality dairy and beef while prioritizing animal welfare,
              soil health, and carbon footprint reduction.
            </p>
          </div>
        </div>

        {/* ========== BOTTOM GRID ========== */}
        <div className="about-grid">
          
          {/* Card 1: Cow */}
          <div className="grid-card cow-card">
            <img 
              src="/cowImage.png" 
              alt="Cow close up" 
            />
          </div>

          {/* Card 2: Farmer (local image) */}
          <div className="grid-card farmer-card">
            <img 
              src="/farm.png" 
              alt="Farmer with cows" 
            />
          </div>

          {/* Card 3: Green Values */}
          <div className="grid-card values-card">
            <div className="values-icon">
              <img src="/cow.png" alt="Cow Icon" />
            </div>
            <div className="values-content">
              <h3>Our Core Values</h3>
              <div className="values-tags">
                <span>Sustainability First</span>
                <span className="divider">/</span>
                <span>Animal Welfare</span>
                <span className="divider">/</span>
                <span>Community</span>
              </div>
            </div>
          </div>

          {/* Card 4: Yellow Stat */}
          <div className="grid-card stat-card">
            <h3 className="stat-number">90<span>+</span></h3>
            <p className="stat-label">Liters Daily milk production</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;