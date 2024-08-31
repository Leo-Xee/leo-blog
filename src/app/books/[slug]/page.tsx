import { Container } from '@/components/common/Container';
import { Markdown } from '@/components/common/Markdown';
import { getAllPosts, getPost } from '@/libs/api';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Book({ params: { slug } }: Params) {
  const post = getPost('books', slug);

  return (
    <main>
      <Container>
        <Markdown post={post} />
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts('books');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
