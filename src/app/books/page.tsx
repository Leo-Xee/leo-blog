import { Container } from '@/components/common/Container';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { getAllPosts } from '@/libs/api';

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
