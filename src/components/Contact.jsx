import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{'// contact'}</span>
        <h2 className="section-title">
          Let's <span className="gradient-text">connect</span>
        </h2>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Get in touch</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>rahul.pr.indium@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Chennai, India</span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/Rahullee135" target="_blank" rel="noreferrer" className="contact-social hoverable">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="contact-social hoverable">
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="form-input form-textarea"
            />
          </div>
          <button type="submit" className="btn btn-primary hoverable" disabled={sending}>
            {sent ? '✅ Sent!' : sending ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
