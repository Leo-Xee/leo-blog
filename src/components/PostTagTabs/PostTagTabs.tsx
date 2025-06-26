'use client';

import { Post } from '@/types/post';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import useHorizontalScrollToCenter from '@/hooks/useHorizontalScrollToCenter';
import * as styles from './PostTagTabs.css';

type PostTagTabsProps = {
  posts: Post[];
};

type TagWithCount = { tagName: string; tagCount: number };

function calculateTagCounts(posts: Post[]) {
  const tags = posts.map((post) => post.tags).flat();

  const individualTagCounts = tags.reduce(
    (acc: Record<string, number>, currentTag) => {
      const hasExistingTag = acc[currentTag] !== undefined;

      return {
        ...acc,
        [currentTag]: hasExistingTag ? acc[currentTag] + 1 : 1,
      };
    },
    {}
  );

  return {
    All: posts.length,
    ...individualTagCounts,
  };
}

function sortTagsByCountDescending(
  tagCounts: Record<string, number>
): TagWithCount[] {
  const tagEntries = Object.entries(tagCounts);

  return tagEntries
    .map(([tagName, tagCount]) => ({ tagName, tagCount }))
    .sort((a, b) => b.tagCount - a.tagCount);
}

function PostTagTabs({ posts }: PostTagTabsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCenter = useHorizontalScrollToCenter();

  const tagSearchParam = searchParams.get('tag');

  const tagCounts = calculateTagCounts(posts);
  const sortedTags = sortTagsByCountDescending(tagCounts);

  useEffect(() => {
    if (!tabContainerRef?.current) return;

    const container = tabContainerRef.current;
    const activeTab = container.querySelector(
      `#tab-${tagSearchParam || 'All'}`
    ) as HTMLElement;

    if (activeTab) {
      scrollToCenter(container, activeTab);
    }
  }, [tagSearchParam, scrollToCenter]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>All Posts</h2>

      <div className={styles.tabContainer} ref={tabContainerRef}>
        {sortedTags.map(({ tagName, tagCount }) => {
          const isAllTabSelected = tagName === 'All' && !tagSearchParam;
          const isTagSelected = tagName === tagSearchParam;
          const isActive = isAllTabSelected || isTagSelected;

          return (
            <Link
              key={tagName}
              href={tagName === 'All' ? pathname : `${pathname}?tag=${tagName}`}
            >
              <div
                id={`tab-${tagName}`}
                className={`${styles.tabItem} ${isActive ? styles.tabItemActive : ''}`}
              >
                <div>{tagName}</div>
                <div
                  className={`${styles.tabTagCount} ${isActive ? styles.tabTagCountActive : ''}`}
                >
                  ({tagCount})
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PostTagTabs;
