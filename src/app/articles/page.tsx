import { Template } from '@/components/common/Template';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts } from '@/libs/api';
import { Metadata } from 'next';
import { openGraph, twitter } from '../shared-metadata';

export const metadata: Metadata = {
  title: POST_LIST_SUMMARY[0].title,
  description: POST_LIST_SUMMARY[0].description,
  openGraph: {
    ...openGraph,
    title: POST_LIST_SUMMARY[0].title,
    description: POST_LIST_SUMMARY[0].description,
  },
  twitter: {
    ...twitter,
    title: POST_LIST_SUMMARY[0].title,
    description: POST_LIST_SUMMARY[0].description,
  },
};

export default function Articles() {
  const posts = getAllPosts('articles');

  return (
    <Template.Root>
      <Template.Main>
        <PostListSummary type="articles" posts={posts} />
        <PostList type="articles" posts={posts} />
      </Template.Main>
    </Template.Root>
  );
}
