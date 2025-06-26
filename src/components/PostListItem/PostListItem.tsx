import { Post, PostType } from '@/types/post';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import * as styles from './PostListItem.css';

type PostListItemProps = {
  postType: PostType;
  post: Post;
};

function PostListItem({ postType, post }: PostListItemProps) {
  return (
    <li>
      <Link href={`/${postType}/${post.slug}`}>
        <div className={styles.postListItem}>
          <div className={styles.postHeader}>
            <h3 className={styles.postTitle}>{post.title}</h3>
          </div>

          <span className={styles.postDate}>
            {format(post.createdAt, 'yyyy. MM. dd')}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default PostListItem;
