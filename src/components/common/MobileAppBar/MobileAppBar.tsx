'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AvatarImg from '@assets/leo.png';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { NAV_ITEMS } from '@/constants';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import * as styles from './MobileAppBar.css';
import { ThemeSwitch } from '../ThemeSwitch';

const listVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 },
};

const listItemVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, y: -20 },
};

function MobileAppBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleButtonClick = () => {
    if (isNavOpen) {
      document.body.style.overflow = '';
      setIsNavOpen(false);
    } else {
      document.body.style.overflow = 'hidden';
      setIsNavOpen(true);
    }
  };

  return (
    <header className={styles.appBar}>
      <Image src={AvatarImg} width={30} height={30} alt="" />

      <div className={styles.menus}>
        <ThemeSwitch />
        <button
          type="button"
          onClick={handleButtonClick}
          aria-label="open menu"
          className={styles.button}
        >
          <Bars2Icon width={24} height={24} />
        </button>
      </div>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            key="nav-container"
            initial={{ height: 0 }}
            animate={{ height: '100vh', transition: { duration: 0.3 } }}
            exit={{ height: 0 }}
            className={styles.navContainer}
          >
            <div className={styles.navHeader}>
              <button
                type="button"
                onClick={handleButtonClick}
                aria-label="close menu"
                className={styles.button}
              >
                <XMarkIcon width={24} height={24} />
              </button>
            </div>

            <nav>
              <motion.ul
                key="list"
                variants={listVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {NAV_ITEMS.map(({ title, path }) => (
                  <motion.li key={title} variants={listItemVariants}>
                    <Link
                      href={path}
                      className={styles.navItem}
                      onClick={handleButtonClick}
                    >
                      {title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MobileAppBar;
