import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const word = {
  hidden: { opacity: 0, y: '0.55em', filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Reveal = ({ text, className = '', amount = 0.6 }) => {
  const words = text.split(' ');
  return (
    <motion.span
      className={`reveal ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {words.map((w, i) => (
        <motion.span key={`${w}-${i}`} variants={word} className={`reveal-word ${className}`}>
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Reveal;
