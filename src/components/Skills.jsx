import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt,
  FaSalesforce, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiRedis,
  SiExpress, SiNextdotjs, SiRedux, SiVite, SiMui,
  SiAntdesign, SiTerraform, SiPostman, SiMysql, SiGo,
  SiZendesk, SiGooglecloud, SiPlotly
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      { name: 'Material UI', icon: <SiMui />, color: '#007FFF' },
      { name: 'Ant Design', icon: <SiAntdesign />, color: '#0170FE' },
      { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'Plotly.js', icon: <SiPlotly />, color: '#3F4F75' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'Azure', icon: <FaAws />, color: '#0078D4' },
      { name: 'GCP', icon: <SiGooglecloud />, color: '#4285F4' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'Salesforce', icon: <FaSalesforce />, color: '#00A1E0' },
      { name: 'Zendesk', icon: <SiZendesk />, color: '#03363D' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{'// skills'}</span>
        <h2 className="section-title">
          My <span className="gradient-text">tech stack</span>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="skill-category glass"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: catIdx * 0.2 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-item hoverable"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: catIdx * 0.2 + i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
