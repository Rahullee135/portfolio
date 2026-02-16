import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    role: 'Software Developer',
    period: 'May 2025 – Present',
    description: 'Leading frontend architecture for a healthcare tariff validation system. Building production-ready modules for document validation, analytics dashboards, and real-time QC tracking.',
    tech: ['React', 'TypeScript', 'Zustand', 'Ant Design', 'Plotly.js', 'REST APIs'],
    highlights: [
      'Built the entire frontend solution independently from scratch',
      'Designed critical modules: QC Dashboard, Document Upload, Report Viewer',
      'Integrated complex REST APIs with robust error handling using Zustand',
      'Implemented token-based authentication with role-based access control',
    ],
  },
  {
    role: 'Software Developer',
    period: 'Dec 2023 – Dec 2024',
    description: 'Developed responsive web applications and integrated frontend with third-party CRM platforms including Salesforce, Zendesk, and Kibo OMS.',
    tech: ['React', 'Material UI', 'Salesforce LWC', 'Zendesk ZAF', 'Node.js', 'Azure'],
    highlights: [
      'Collaborated with UX/UI designers to translate wireframes into high-quality code',
      'Built Salesforce-Kibo OMS middleware using Node.js for real-time order management',
      'Integrated Zendesk with Kibo OMS for automated order retrieval and display',
      'Conducted code reviews and mentored team members',
    ],
  },
  {
    role: 'Associate Software Developer',
    period: 'May 2021 – May 2023',
    description: 'Developed and maintained enterprise applications. Spearheaded the GameOn desktop application project, transitioning it from POC to a billable product.',
    tech: ['React', 'Wails (Go)', 'Plotly.js', 'Material UI', 'Git'],
    highlights: [
      'Built GameOn desktop app using Wails framework (Go) with React frontend',
      'Implemented live data visualization graphs using Plotly.js',
      'Recognized as part of Best Super Squad of the Year 2022',
      'Consistently resolved 3-4 tickets per day, meeting all client deadlines',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section experience" id="experience" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{'// experience'}</span>
        <h2 className="section-title">
          Where I've <span className="gradient-text">worked</span>
        </h2>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card glass hoverable">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <p className="timeline-desc">{exp.description}</p>
              <ul className="timeline-highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className="timeline-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
