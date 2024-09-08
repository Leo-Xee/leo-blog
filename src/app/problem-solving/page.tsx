import { Container } from '@/components/common/Container';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts } from '@/libs/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: POST_LIST_SUMMARY[1].title,
  description: POST_LIST_SUMMARY[1].description,
  openGraph: {
    title: POST_LIST_SUMMARY[1].title,
    description: POST_LIST_SUMMARY[1].description,
  },
  twitter: {
    title: POST_LIST_SUMMARY[1].title,
    description: POST_LIST_SUMMARY[1].description,
  },
};

export default function Problems() {
  const posts = getAllPosts('problem-solving');

  return (
    <main>
      <Container>
        <PostListSummary type="problem-solving" posts={posts} />
        <PostList type="problem-solving" posts={posts} />
      </Container>
    </main>
  );
}
