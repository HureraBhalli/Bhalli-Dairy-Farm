import './FeedbackSection.css';

const FeedbackSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
   };

  return (
    <section className="feedback-section">

      <div className="feedback-decoration">
        <img 
          src="/cow.svg" 
          alt="Decorative line art" 
          className="feedback-decoration-img" 
        />
      </div>

      <div className="feedback-container">

        {/* ========== LEFT SIDE ========== */}
        <div className="feedback-left">
          
          <span className="feedback-label">05. FEEDBACK</span>
          <h2 className="feedback-heading">Users feedback</h2>

          {/* Avatars Row */}
          <div className="feedback-avatars">
            <img src="https://cdn.pixabay.com/photo/2022/06/23/05/26/smart-boy-picture-7279162_1280.jpg" alt="user1" className="active" />
            <img src="https://i.pinimg.com/474x/dd/27/95/dd2795c347b98ce4008a7193a6022b9b.jpg" alt="user2" />
            <img src="https://i.pinimg.com/originals/ea/1f/48/ea1f48b10cfb6135ad915b87fefba2c7.jpg" alt="user3" />
          </div>

          {/* User Info */}
          <div className="feedback-user">
            <h4>Dr. Ali Hassan</h4>
            <p>LiveStock</p>
          </div>

          {/* Contact Button */}
          <button className="feedback-btn" onClick={() => scrollToSection('contact')}>
            CONTACT US
          </button>

        </div>

        {/* ========== RIGHT SIDE ========== */}
        <div className="feedback-right">

          {/* Big Image */}
          <div className="feedback-image-wrapper">
            <img 
              src="/Horse.png" 
              alt="Farm cattle" 
              className="feedback-image"
            />
          </div>

          {/* Rating + Label Row */}
          <div className="feedback-meta">
            <div className="feedback-stars">★★★★★</div>
            <span className="feedback-meta-label">QUALITY PRODUCT & THING</span>
          </div>

          {/* Quote / Review */}
          <p className="feedback-quote">
            Our farm is dedicated to sustainable cattle rearing, producing
            high-quality dairy & beef while prioritizing animal welfare, soil
            health, and carbon footprint reduction.
          </p>

        </div>

      </div>
    </section>
  );
};

export default FeedbackSection;