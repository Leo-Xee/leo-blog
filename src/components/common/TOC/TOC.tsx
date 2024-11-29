'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Post } from '@/types/post';
import Link from 'next/link';
import GithubSlugger from 'github-slugger';
import { APP_BAR_HEIGHT } from '@/constants';
import * as styles from './TOC.css';

type Heading = {
  id: number;
  level: number;
  text: string;
  slug: string;
};

type TOCProps = {
  post: Post;
};

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^\s*>?\s*(#{2,6})\s+(.+)$/gm;
  const matches = Array.from(content.matchAll(headingRegex));

  const slugger = new GithubSlugger();

  return matches.map((match, index) => ({
    id: index,
    level: match[1].length,
    text: match[2],
    slug: slugger.slug(match[2]),
  }));
}

const OFFSET = 20;

function TOC({ post }: TOCProps) {
  const [activeHeading, setActiveHeading] = useState<Heading | null>(null);

  const headings = useMemo(() => extractHeadings(post.content), [post.content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingsWithPosition = headings.map((heading) => {
        const element = document.getElementById(heading.slug);

        return {
          ...heading,
          top: element
            ? document.documentElement.scrollTop +
              element.getBoundingClientRect().top
            : 0,
        };
      });

      const currentHeading = headingsWithPosition
        .reverse()
        .find(
          ({ top }) =>
            top <= document.documentElement.scrollTop + APP_BAR_HEIGHT + OFFSET
        );

      if (currentHeading) {
        setActiveHeading(currentHeading);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeHeading?.id, headings]);

  return (
    <ul className={styles.list}>
      {headings.map(({ id, level, text, slug }) => {
        const isActive = activeHeading?.id === id;

        return (
          <li
            key={id}
            className={`${styles.listItem} ${isActive ? styles.activeListItem : ''}`}
            style={{ paddingLeft: `${(level - 1) * 10}px` }}
          >
            <Link href={`#${slug}`}>
              <span className={isActive ? styles.activeListItemText : ''}>
                {text}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TOC;
