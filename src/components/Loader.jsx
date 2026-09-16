import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="loading-text"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          >
            &lt;LOADING/&gt;
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
