'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AvatarImg from '@assets/leo.png';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from '../ThemeSwitch';
import * as styles from './AppBar.css';

const navItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Articles',
    path: '/articles',
  },
  {
    title: 'PS',
    path: '/problem-solving',
  },
  {
    title: 'Books',
    path: '/books',
  },
];

function AppBar() {
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      <div className={styles.appBar}>
        <div className={styles.wrapper}>
          <div className={styles.brand}>
            <Image src={AvatarImg} width={30} height={30} alt="" />

            <span>leo-xee</span>
          </div>

          <nav>
            <ul className={styles.navList}>
              {navItems.map(({ title, path }) => {
                const isActive = path.split('/')[1] === pathname.split('/')[1];

                return (
                  <li key={title} className={styles.navListItem}>
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
      </div>
    </header>
  );
}

export default AppBar;
