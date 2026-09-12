import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <img 
        src="/Bhali.png"     
        alt="Dairy Farm" 
        className="feature-image"
      />
      <div className="feature-overlay"></div>
    </section>
  );
};

export default FeatureSection;