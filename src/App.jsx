import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection'; 
import ExpertiseSection from './components/ExpertiseSection'; 
import WhyChooseUs from './components/WhyChooseUs'; 
import FarmOverview from './components/FarmOverview';     
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* HOME - Hero + Feature */}
      <div id="home">
        <HeroSection />
        <FeatureSection />
      </div>

      {/* ABOUT */}
      <div id="about">
        <AboutSection />
      </div>

      {/* OUR EXPERTISE */}
      <div id="expertise">
        <ExpertiseSection />
      </div>

      {/* WHY CHOOSE US */}
      <div id="why">
        <WhyChooseUs />
      </div>

      {/* FARM OVERVIEW */}
      <div id="farm">
        <FarmOverview />
        <FeedbackSection />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;