'use client';

import { motion, AnimatePresence } from 'framer-motion';
import styles from './loader.module.css';

export default function Loader({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key='loader'
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.25, ease: [0.83, 0, 0.17, 1] }}
          className={styles.div}
        >
          <motion.img
            src='/logomark-black.png'
            alt='Logo'
            className={styles.logo}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatType: 'reverse',
            }}
          ></motion.img>
          <p className={styles.text}>First Light Collective</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
