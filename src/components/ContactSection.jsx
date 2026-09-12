import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Aapki EmailJS Keys
    const SERVICE_ID = 'bhalli_dairy_farm';
    const TEMPLATE_ID = 'template_c8a987r';
    const PUBLIC_KEY = 'PNmu7ieQh2BBuQnyv';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log('✅ SUCCESS!', result.text);
          setStatus({
            type: 'success',
            message: 'Message sent successfully! We will contact you soon.',
          });
          formRef.current.reset();
        },
        (error) => {
          console.log('❌ FAILED...', error.text);
          setStatus({
            type: 'error',
            message: 'Something went wrong. Please try again.',
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* ========== HEADER ========== */}
        <div className="contact-header">
          <span className="contact-label">06. CONTACT US</span>
          <h2 className="contact-heading">Contact Us</h2>
        </div>

        {/* ========== FORM CARD ========== */}
        <form 
          className="contact-form" 
          ref={formRef}
          onSubmit={sendEmail}
        >
          
          {/* Row 1: Full Name + Email */}
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName"
                name="fullName"
                placeholder="Sarah Johnson" 
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="sarah.johnson@email.com" 
                required
              />
            </div>
          </div>

          {/* Row 2: Phone + Location */}
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number" 
              />
            </div>
            <div className="contact-field">
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                id="location"
                name="location"
                placeholder="Enter your current location" 
              />
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="contact-row contact-row-full">
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Type anything here..." 
                rows="6"
                required
              ></textarea>
            </div>
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`contact-status ${status.type}`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="contact-btn-wrapper">
            <button 
              type="submit" 
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading ? 'SENDING...' : 'SUBMIT'}
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default ContactSection;