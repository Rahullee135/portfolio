import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <motion.div className="hero-content" style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}>
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
          A passionate developer with 4.5+ years of experience architecting and shipping
          production-grade platforms — from enterprise banking workflow systems to full-stack
          MERN applications. Turning complex problems into elegant solutions.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="projects" smooth duration={500} offset={-80}>
            <MagneticButton className="btn btn-primary hoverable">
              View My Work
              <HiArrowDown className="btn-icon" />
            </MagneticButton>
          </Link>
          <Link to="contact" smooth duration={500} offset={-80}>
            <MagneticButton className="btn btn-outline hoverable">Let's Talk</MagneticButton>
          </Link>
          <MagneticButton as="a" href="/portfolio/Rahul_Resume.pdf" download className="btn btn-outline hoverable">
            <HiDownload className="btn-icon" /> Resume
          </MagneticButton>
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
          <a
            href="https://www.linkedin.com/in/rahul-prasad-65b993167/"
            target="_blank"
            rel="noreferrer"
            className="social-link hoverable"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        style={{ y: visualY, opacity: visualOpacity }}
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
    that matter 🚀",
  available: true
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
