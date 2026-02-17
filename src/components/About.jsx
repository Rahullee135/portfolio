import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaCloud, FaRocket } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const cards = [
    { icon: <FaCode />, title: 'Frontend', desc: 'Pixel-perfect UIs with React, TypeScript & modern CSS' },
    { icon: <FaServer />, title: 'Backend', desc: 'Scalable APIs with Node.js, Express & MongoDB' },
    { icon: <FaCloud />, title: 'Cloud', desc: 'Deployments on Azure, GCP with Terraform IaC' },
    { icon: <FaRocket />, title: 'Full Stack', desc: 'End-to-end product development from zero to production' },
  ];

  return (
    <section className="section about" id="about" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{'// about me'}</span>
        <h2 className="section-title">
          Turning ideas into <span className="gradient-text">reality</span>
        </h2>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a <strong>Full Stack Developer</strong> with over 4 years of hands-on experience
            building production-ready web applications. I specialize in the <strong>MERN stack</strong> and
            have a proven track record of delivering complex enterprise solutions.
          </p>
          <p>
            From crafting responsive UIs to architecting robust backend systems, I thrive on
            solving challenging problems. I've independently built frontend solutions from scratch,
            integrated complex third-party systems like Salesforce, Zendesk, and Kibo OMS,
            and shipped desktop applications using Go and React.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source, or debugging at 2 AM when everything suddenly makes sense.
          </p>

          <div className="about-stats">
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Delivered' },
              { number: '10+', label: 'Technologies' },
              { number: '3', label: 'Companies' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                <span className="stat-number gradient-text">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="about-cards">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="about-card glass hoverable"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
