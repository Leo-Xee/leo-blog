import { Container } from '@/components/common/Container';
import { PostList } from '@/components/PostList';
import { PostListSummary } from '@/components/PostListSummary';
import { getAllPosts } from '@/libs/api';

export default function Problems() {
  const posts = getAllPosts('articles');

  return (
    <main>
      <Container>
        <PostListSummary type="problem-solving" posts={posts} />
        <PostList type="problem-solving" posts={posts} />
      </Container>
    </main>
  );
}
