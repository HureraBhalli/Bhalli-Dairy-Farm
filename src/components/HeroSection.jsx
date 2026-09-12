import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">

      {/* Heading - Desktop pe ek line, mobile pe wrap */}
      <h1 className="hero-title">
        BHALLI DAIRY FARM
      </h1>

      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          <div className="badge-inner">
            <img src="/circle.png" alt="Certified badge" />
          </div>
        </div>

        {/* Paragraph */}
        <p className="hero-text">
          Our farm is dedicated to sustainable cattle rearing, producing
          high-quality dairy and beef while prioritizing animal welfare,
          soil health, and carbon footprint reduction.
        </p>

      </div>

      {/* Yellow Splash */}
      <div className="yellow-splash">
        <img src="/cheese-splash.png" alt="Cheese Splash" />
      </div>

    </section>
  );
};

export default HeroSection;