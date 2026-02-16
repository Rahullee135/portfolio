import { motion } from 'framer-motion';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="badge-dot" />
          Available for opportunities
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm <span className="gradient-text">Rahul</span>
        </motion.h1>

        <motion.div
          className="hero-subtitle-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="hero-subtitle">
            I build <span className="typewriter">full-stack web applications</span>
          </h2>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          A passionate developer with 4+ years of experience crafting scalable,
          production-ready applications using React, Node.js, and MongoDB.
          Turning complex problems into elegant solutions.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="projects" smooth duration={500} offset={-80}>
            <button className="btn btn-primary hoverable">
              View My Work
              <HiArrowDown className="btn-icon" />
            </button>
          </Link>
          <Link to="contact" smooth duration={500} offset={-80}>
            <button className="btn btn-outline hoverable">
              Let's Talk
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a href="https://github.com/Rahullee135" target="_blank" rel="noreferrer" className="social-link hoverable">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="social-link hoverable">
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="code-window">
          <div className="code-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="code-title">developer.js</span>
          </div>
          <div className="code-body">
            <pre>
              <code>
{`const developer = {
  name: "Rahul",
  role: "Full Stack Developer",
  skills: {
    frontend: ["React", "Next.js",
      "TypeScript"],
    backend: ["Node.js", "Express",
      "MongoDB"],
    cloud: ["Azure", "GCP",
      "Terraform"]
  },
  passion: "Building things
    that matter 🚀"
};`}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
      >
        <HiArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
