import { Post, PostType } from '@/types/post';
import React from 'react';
import * as styles from './PostListSummary.css';

type Summary = {
  type: PostType;
  title: string;
  description: string;
};

type PostListSummaryProps = {
  type: PostType;
  posts: Post[];
};

function PostListSummary({ posts, type }: PostListSummaryProps) {
  const summaries: Summary[] = [
    {
      type: 'articles',
      title: 'Articles',
      description: `지금까지 총 ${posts.length}개의 글을 작성했어요.`,
    },
    {
      type: 'problem-solving',
      title: 'Problem Solving',
      description: `지금까지 총 ${posts.length}개의 알고리즘 문제를 풀고 글을 작성했어요.`,
    },
    {
      type: 'books',
      title: 'Books',
      description: `지금까지 총 ${posts.length}권의 책을 읽고 글을 작성했어요.`,
    },
  ];

  const currentSummary = summaries.find((summary) => summary.type === type);

  return (
    <div>
      <h1 className={styles.title}>{currentSummary?.title}</h1>
      <p className={styles.description}>{currentSummary?.description}</p>
    </div>
  );
}

export default PostListSummary;
