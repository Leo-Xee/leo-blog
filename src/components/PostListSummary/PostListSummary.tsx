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
      description: `하나의 기록이 점이 되고, 그 점들이 이어져 선이 되어서 결국 나아갈 방향을 이끌어준다고 믿어요.
                    학습한 내용, 겪은 시행착오, 그리고 생각의 흐름을 정리하며 이를 통해 더 나은 길을 찾아가고자 해요.
                    지금까지 총 ${posts.length}개의 글을 작성했어요.`,
    },
    {
      type: 'problem-solving',
      title: 'Problem Solving',
      description: `기술은 빠르게 변화하지만, 이를 근본적으로 지탱하고 있는 것은 자료구조와 알고리즘이라고 믿어요.
                    주로 백준 온라인 저지, LeetCode의 알고리즘 문제를 C++와 JavaScript 언어를 기반으로 꾸준히 풀고 있어요.
                    이를 통해 더 복잡한 문제에도 자신감을 가지고 도전할 수 있도록 노력하고 있어요.
                    지금까지 총 ${posts.length}개의 알고리즘 문제를 풀고 글을 작성했어요.`,
    },
    {
      type: 'books',
      title: 'Books',
      description: `요량이 아닌 본질이 담긴 깊이 있는 지식은 단편적인 글이 아닌 책 속에 있다고 믿어요.
                    특히 기술, 디자인, 인문학, 경제 분야에 관심이 많아서 조금씩이라도 꾸준히 책을 읽으며 지식을 넓혀가고자 해요.
                    이 과정을 통해 다양한 관점을 얻고, 더 깊이 있는 이해를 쌓아가고 있어요.
                    지금까지 총 ${posts.length}권의 책을 읽고 글을 작성했어요.`,
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
