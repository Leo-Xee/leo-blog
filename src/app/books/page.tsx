import { Template } from '@/components/common/Template';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts } from '@/libs/api';
import { Metadata } from 'next';
import { openGraph, twitter } from '../shared-metadata';

export const metadata: Metadata = {
  title: POST_LIST_SUMMARY[2].title,
  description: POST_LIST_SUMMARY[2].description,
  openGraph: {
    ...openGraph,
    title: POST_LIST_SUMMARY[2].title,
    description: POST_LIST_SUMMARY[2].description,
  },
  twitter: {
    ...twitter,
    title: POST_LIST_SUMMARY[2].title,
    description: POST_LIST_SUMMARY[2].description,
  },
};

export default function Books() {
  const posts = getAllPosts('books');

  return (
    <Template.Root>
      <Template.Main>
        <PostListSummary type="books" posts={posts} />
        <PostList type="books" posts={posts} />
      </Template.Main>
    </Template.Root>
  );
}
