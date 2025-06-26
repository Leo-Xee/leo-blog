'use client';

import { Post, PostType } from '@/types/post';
import Link from 'next/link';
import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import * as styles from './PostList.css';

type PostListProps = {
  type: PostType;
  posts: Post[];
};

function PostList({ type, posts }: PostListProps) {
  return (
    <div>
      <h2 className={styles.title}>All Posts</h2>

      <motion.ul
        className={styles.postList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          staggerChildren: 0.08,
          delayChildren: 0.08,
        }}
      >
        {posts.map((post, index) => (
          <motion.li
            key={post.slug}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
              delay: index * 0.08,
            }}
          >
            <Link href={`/${type}/${post.slug}`}>
              <div className={styles.postListItem}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <span className={styles.postDate}>
                  {format(post.createdAt, 'yyyy. MM. dd')}
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default PostList;
