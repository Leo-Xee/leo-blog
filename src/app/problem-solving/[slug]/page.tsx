import { Container } from '@/components/common/Container';
import { Markdown } from '@/components/common/Markdown';
import { getAllPosts, getPost } from '@/libs/api';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Problem({ params: { slug } }: Params) {
  const post = getPost('problem-solving', slug);

  return (
    <main>
      <Container>
        <Markdown post={post} />
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts('problem-solving');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
