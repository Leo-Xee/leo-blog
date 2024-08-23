'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AvatarImg from '@assets/leo.png';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { vars } from '@/styles/themes.css';
import { ThemeSwitch } from '../ThemeSwitch';
import * as styles from './AppBar.css';

function AppBar() {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (currentScrollY) => {
    if (currentScrollY < 250) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });

  return (
    <header className={styles.container}>
      <motion.div
        className={styles.appBar}
        transition={{
          duration: 0.5,
          type: 'spring',
        }}
        animate={{
          width: isTop ? vars.breakpoint.tablet : '408px',
          borderRadius: isTop
            ? vars.borderRadius.radii02
            : vars.borderRadius.rounded,
        }}
      >
        <div className={styles.wrapper}>
          <Image src={AvatarImg} width={30} height={30} alt="" />

          <nav>
            <ul className={styles.navList}>
              {NAV_ITEMS.map(({ title, path }) => {
                const isActive = path.split('/')[1] === pathname.split('/')[1];

                return (
                  <li key={title}>
                    <Link
                      href={path}
                      className={
                        isActive ? styles.ActiveNavItem : styles.navItem
                      }
                    >
                      <span>{title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <ThemeSwitch />
      </motion.div>
    </header>
  );
}

export default AppBar;
