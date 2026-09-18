import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TAGS = { button: motion.button, a: motion.a };

const MagneticButton = ({ children, className = '', as = 'button', ...props }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Tag = TAGS[as] || motion.button;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <Tag
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.2 }}
      {...props}
    >
      <span className="magnetic-inner">{children}</span>
    </Tag>
  );
};

export default MagneticButton;
