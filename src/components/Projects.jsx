import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Healthcare Tariff Validation',
    description: 'A large-scale healthcare validation platform for real-time processing of treatment bills, codes, and claim documents with interactive dashboards.',
    tech: ['React', 'TypeScript', 'Zustand', 'Ant Design', 'Plotly.js', 'REST APIs'],
    color: '#58A6FF',
    emoji: '🏥',
  },
  {
    title: 'Warehouse Management System',
    description: 'Intuitive interface for tracking orders, managing inventory with barcode scanning, and real-time synchronization between web and mobile platforms.',
    tech: ['React', 'Material UI', 'Zustand', 'REST APIs'],
    color: '#F78166',
    emoji: '📦',
  },
  {
    title: 'EduAlliance',
    description: 'A specialized social media application for schools with admin-controlled access, custom rich text editor, posting, scheduling, and publishing features.',
    tech: ['React', 'Material UI', 'Lexical Editor', 'Zustand'],
    color: '#7C3AED',
    emoji: '🎓',
  },
  {
    title: 'Kibo-Salesforce Integration',
    description: 'Node.js middleware connecting Salesforce with Kibo OMS for real-time order retrieval, automatic case parsing, and shipping management.',
    tech: ['Node.js', 'Salesforce LWC', 'Azure/GCP', 'Kibo OMS APIs'],
    color: '#00A1E0',
    emoji: '🔗',
  },
  {
    title: 'GameOn Desktop App',
    description: 'A cost-effective desktop application for game testing with live interactive graphs. Successfully transitioned from POC to billable project.',
    tech: ['React', 'Wails (Go)', 'Plotly.js', 'Material UI'],
    color: '#10B981',
    emoji: '🎮',
  },
  {
    title: 'Video Player App',
    description: 'Full-stack MERN video player with YouTube search integration, playlist management, favorites system, and dark theme UI.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vite'],
    github: 'https://github.com/Rahullee135/video-player-app',
    color: '#EC4899',
    emoji: '🎬',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{'// projects'}</span>
        <h2 className="section-title">
          Things I've <span className="gradient-text">built</span>
        </h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card glass hoverable"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ '--accent': project.color }}
          >
            <div className="project-emoji">{project.emoji}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            {project.github && (
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link hoverable">
                  <FaGithub /> Code
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
