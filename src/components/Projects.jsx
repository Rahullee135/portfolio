import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

const flagship = {
  title: 'APTS — Unified Workflow Platform',
  client: 'Private-sector bank engagement',
  tagline: 'A single platform running three enterprise banking workflows — architected and delivered end to end, solo, across backend and frontend.',
  description:
    "The bank tracked board action points, content approvals, and pricing sign-offs across spreadsheets and email threads with no audit trail, no ownership clarity, and no follow-up on overdue items. I delivered one connected platform that replaces all three with a single, auditable system — giving every request a clear owner, a visible status, and automatic follow-up until it's closed.",
  modules: [
    {
      name: 'APTS — Action Point Tracking',
      desc: 'Board & committee action points with a two-track SLA reminder engine (creation-based and target-date-based) escalating SPOC → MANCOM → MD & CEO, plus system-generated memorandums.',
    },
    {
      name: 'CWM — Centralized Content Workflow',
      desc: 'Content request & approval across SMS, WhatsApp, Email, and Letters — routed through Brand SPOC → Brand Supervisor → SDG Process Head with a structured clarification/exception cycle.',
    },
    {
      name: 'WBG — Pricing & Deferral Approvals',
      desc: 'Multi-step pricing and deferral approval workflow with an hourly SLA cron job that automatically discards expired requests and logs every workflow transition.',
    },
  ],
  stats: [
    { value: '93 / 99', label: 'Backend / frontend tests passing' },
    { value: '0', label: 'ESLint errors — down from 187' },
    { value: '3', label: 'Isolated tenant modules, one platform' },
    { value: '500+', label: 'Concurrent-user design target' },
  ],
  stack: {
    Frontend: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'ApexCharts'],
    Backend: ['Node.js', 'Express 5', 'PostgreSQL / Oracle', 'Redis', 'Solace MQ', 'JWT + RBAC'],
    Platform: ['OpenShift', 'Docker', 'Swagger / OpenAPI', 'Winston logging'],
  },
};

const projects = [
  {
    title: 'Healthcare Tariff Validation',
    description: 'Delivered a large-scale healthcare validation platform that processes treatment bills, codes, and claim documents in real time, giving the QC team live dashboards and full visibility into every claim.',
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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

      <div className="flagship">
        <div className="flagship-sticky">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">{'// flagship project'}</span>
            <h3 className="flagship-title">{flagship.title}</h3>
            <span className="flagship-client">{flagship.client}</span>
            <p className="flagship-tagline">{flagship.tagline}</p>
            <span className="tech-tag flagship-badge">Architected solo, backend + frontend</span>
          </motion.div>
        </div>

        <div className="flagship-scroll">
          <motion.div
            className="flagship-block glass hoverable"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h4>What I built</h4>
            <p>{flagship.description}</p>
          </motion.div>

          {flagship.modules.map((m) => (
            <motion.div
              key={m.name}
              className="flagship-block glass hoverable"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h4>{m.name}</h4>
              <p>{m.desc}</p>
            </motion.div>
          ))}

          <motion.div
            className="flagship-stats"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {flagship.stats.map((s) => (
              <div key={s.label} className="flagship-stat">
                <span className="flagship-stat-value gradient-text">{s.value}</span>
                <span className="flagship-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flagship-block glass hoverable"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h4>Tech stack</h4>
            {Object.entries(flagship.stack).map(([group, items]) => (
              <div key={group} className="flagship-stack-row">
                <span className="flagship-stack-label">{group}</span>
                <div className="flagship-tech">
                  {items.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.h3
        className="projects-subheading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        More things I've <span className="gradient-text">shipped</span>
      </motion.h3>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card glass hoverable"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
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
