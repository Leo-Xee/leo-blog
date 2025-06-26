'use client';

import { Post, PostType } from '@/types/post';
import React from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import * as styles from './PostList.css';
import { PostListItem } from '../PostListItem';

type PostListProps = {
  type: PostType;
  posts: Post[];
};

function PostList({ type, posts }: PostListProps) {
  const searchParams = useSearchParams();
  const tagSearchParam = searchParams.get('tag');

  const filteredPosts = tagSearchParam
    ? posts.filter((post) => post.tags.includes(tagSearchParam))
    : posts;

  return (
    <motion.ul
      className={styles.postList}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        staggerChildren: 0.05,
        delayChildren: 0.05,
      }}
    >
      {filteredPosts.map((post, index) => {
        const key = `${post.slug}-${tagSearchParam?.toLowerCase().replace(' ', '-')}`;

        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
              delay: index * 0.05,
            }}
          >
            <PostListItem postType={type} post={post} />
          </motion.div>
        );
      })}
    </motion.ul>
  );
}

export default PostList;
