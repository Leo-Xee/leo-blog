import { Container } from '@/components/common/Container';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { getAllPosts } from '@/libs/api';

export default function Articles() {
  const posts = getAllPosts('articles');

  return (
    <main>
      <Container>
        <PostListSummary type="articles" posts={posts} />
        <PostList type="articles" posts={posts} />
      </Container>
    </main>
  );
}
