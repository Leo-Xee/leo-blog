import { Post, PostType } from '@/types/post';
import Link from 'next/link';
import React from 'react';
import * as styles from './PostList.css';

type PostListProps = {
  type: PostType;
  posts: Post[];
};

function PostList({ type, posts }: PostListProps) {
  return (
    <div>
      <h2 className={styles.title}>All Posts</h2>

      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`${type}/${post.slug}`} className={styles.postListItem}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              {post.description && <div>{post.description}</div>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
