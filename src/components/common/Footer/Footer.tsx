'use client';

import Link from 'next/link';
import React from 'react';
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaSquareXTwitter as SquareXIcon,
} from 'react-icons/fa6';
import * as styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li>
            <Link
              href="https://github.com/Leo-Xee"
              className={styles.listItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={24} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/%EC%9E%A5%EB%AF%BC-%EC%9D%B4-360563147/"
              className={styles.listItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={24} />
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/leo_xexe"
              className={styles.listItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareXIcon size={24} />
            </Link>
          </li>
        </ul>

        <div className={styles.rights}>
          © {new Date().getFullYear()}. leo-xee all rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
