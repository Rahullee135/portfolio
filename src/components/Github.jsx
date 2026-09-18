import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCodeBranch, FaLock, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const GITHUB_USER = 'Rahullee135';

const badges = [
  {
    alt: 'Profile Views',
    src: `https://komarev.com/ghpvc/?username=${GITHUB_USER}&color=58A6FF&style=for-the-badge&label=Profile+Views`,
  },
  {
    alt: 'GitHub Followers',
    src: `https://img.shields.io/github/followers/${GITHUB_USER}?style=for-the-badge&logo=github&color=58A6FF&labelColor=0d1117`,
  },
  {
    alt: 'Public Repositories',
    src: 'https://img.shields.io/badge/Public_Repos-30%2B-7C3AED?style=for-the-badge&logo=github&labelColor=0d1117',
  },
  {
    alt: 'Experience',
    src: 'https://img.shields.io/badge/Experience-4.5%2B_Years-EC4899?style=for-the-badge&labelColor=0d1117',
  },
  {
    alt: 'Open to Work',
    src: 'https://img.shields.io/badge/Open_to-Opportunities-10B981?style=for-the-badge&labelColor=0d1117',
  },
];

const facts = [
  { icon: <FaCodeBranch />, text: '30+ public repositories shipped' },
  { icon: <FaLock />, text: '5 private production projects' },
  { icon: <FaCalendarAlt />, text: 'Active on GitHub since 2021' },
  { icon: <FaUsers />, text: 'Growing open-source network' },
];

const Github = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section github" id="github" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{'// github activity'}</span>
        <h2 className="section-title">
          Consistently <span className="gradient-text">shipping code</span>
        </h2>
        <p className="section-subtitle">
          Live stats straight from GitHub — including private contribution activity.
        </p>
      </motion.div>

      <motion.div
        className="github-badges"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {badges.map((b) => (
          <img key={b.alt} src={b.src} alt={b.alt} className="github-badge" loading="lazy" />
        ))}
      </motion.div>

      <div className="github-grid">
        <motion.div
          className="github-card glass hoverable"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <img
            src={`https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=github-dark-blue&hide_border=true&background=0d1117`}
            alt="GitHub Streak Stats"
            className="github-img"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="github-card github-facts glass hoverable"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <ul className="github-facts-list">
            {facts.map((f) => (
              <li key={f.text}>
                <span className="github-facts-icon">{f.icon}</span>
                {f.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="github-trophies glass"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img
          src={`https://github-trophies.vercel.app/?username=${GITHUB_USER}&theme=darkhub&no-frame=true&no-bg=true&row=1&column=7&margin-w=8`}
          alt="GitHub Trophies"
          className="github-trophy-img"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="github-cta"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline hoverable"
        >
          <FaGithub className="btn-icon" /> View Full GitHub Profile
        </a>
      </motion.div>
    </section>
  );
};

export default Github;
