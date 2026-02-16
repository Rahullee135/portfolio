import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="loader-content">
        <motion.div
          className="loader-bracket"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {'<'}
        </motion.div>
        <motion.span
          className="loader-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Rahul
        </motion.span>
        <motion.div
          className="loader-bracket"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {'/>'}
        </motion.div>
      </motion.div>
      <motion.div
        className="loader-bar"
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Loader;
