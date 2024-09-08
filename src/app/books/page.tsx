import { Container } from '@/components/common/Container';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts } from '@/libs/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: POST_LIST_SUMMARY[2].title,
  description: POST_LIST_SUMMARY[2].description,
  openGraph: {
    title: POST_LIST_SUMMARY[2].title,
    description: POST_LIST_SUMMARY[2].description,
  },
  twitter: {
    title: POST_LIST_SUMMARY[2].title,
    description: POST_LIST_SUMMARY[2].description,
  },
};

export default function Books() {
  const posts = getAllPosts('books');

  return (
    <main>
      <Container>
        <PostListSummary type="books" posts={posts} />
        <PostList type="books" posts={posts} />
      </Container>
    </main>
  );
}
