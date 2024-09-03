'use client';

import React from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';
import useWindowSize from '@/hooks/useWindowSize';
import { isClient } from '@/utils';
import * as styles from './Particles.css';

const LAYER_1 = 40;
const LAYER_2 = 70;
const LAYER_3 = 90;
const Y_OFFSET = 500;

function Particles() {
  const { x, y } = useMousePosition();
  const { width } = useWindowSize();

  const innerWidth = isClient ? window.innerWidth : 0;
  const innerHeight = isClient ? window.innerHeight : 0;

  const xPos = x - innerWidth / 2;
  const yPos = y - innerHeight / 2 + Y_OFFSET;

  const isMobile = width < 768;

  return (
    <motion.div
      className={styles.container}
      animate={{ scale: isMobile ? 1.3 : 1.5 }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <motion.div
        className={styles.particle1}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_3}px, ${yPos / LAYER_3}px)`
            : 'translate(-10px, 0)',
        }}
      />
      <motion.div
        className={styles.particle2}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_2}px, ${yPos / LAYER_2}px)`
            : '',
        }}
      />
      <motion.div
        className={styles.particle3}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_3}px, ${yPos / LAYER_3}px)`
            : '',
        }}
      />
      <motion.div
        className={styles.particle4}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_1}px, ${yPos / LAYER_1}px)`
            : 'translate(20px, 0)',
        }}
      />
      <motion.div
        className={styles.particle5}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_1}px, ${yPos / LAYER_1}px)`
            : 'translate(-15px, 0)',
        }}
      />
      <motion.div
        className={styles.particle6}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_2}px, ${yPos / LAYER_2}px)`
            : '',
        }}
      />
      <motion.div
        className={styles.particle7}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_2}px, ${yPos / LAYER_2}px)`
            : 'translate(10px, -5px)',
        }}
      />
      <motion.div
        className={styles.particle8}
        animate={{
          transform: !isMobile
            ? `translate(${xPos / LAYER_3}px, ${yPos / LAYER_3}px)`
            : 'translate(10px, 0)',
        }}
      />
    </motion.div>
  );
}

export default Particles;
