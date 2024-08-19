import { Container } from '@/components/common/Container';
import { Markdown } from '@/components/common/Markdown';
import { getAllPosts, getPost } from '@/libs/api';
import markdownToHtml from '@/libs/markdown-to-html';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Problem({ params: { slug } }: Params) {
  const post = getPost('problem-solving', slug);
  const content = await markdownToHtml(post.content);

  return (
    <main>
      <Container>
        <Markdown content={content} />
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
