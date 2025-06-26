import { Template } from '@/components/common/Template';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts } from '@/libs/api';
import { Metadata } from 'next';
import { PostTagTabs } from '@/components/PostTagTabs';
import { Suspense } from 'react';
import { openGraph, twitter } from '../shared-metadata';

export const metadata: Metadata = {
  title: POST_LIST_SUMMARY[1].title,
  description: POST_LIST_SUMMARY[1].description,
  openGraph: {
    ...openGraph,
    title: POST_LIST_SUMMARY[1].title,
    description: POST_LIST_SUMMARY[1].description,
  },
  twitter: {
    ...twitter,
    title: POST_LIST_SUMMARY[1].title,
    description: POST_LIST_SUMMARY[1].description,
  },
};

export default function Problems() {
  const posts = getAllPosts('problem-solving');

  return (
    <Template.Root>
      <Template.Main>
        <PostListSummary type="problem-solving" posts={posts} />

        <Suspense fallback={null}>
          <PostTagTabs posts={posts} />
          <PostList type="problem-solving" posts={posts} />
        </Suspense>
      </Template.Main>
    </Template.Root>
  );
}
