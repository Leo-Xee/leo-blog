import { Container } from '@/components/common/Container';
import { Markdown } from '@/components/common/Markdown';
import { getAllContents, getContent } from '@/libs/api';
import markdownToHtml from '@/libs/markdown-to-html';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Book({ params: { slug } }: Params) {
  const post = getContent('books', slug);
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
  const posts = getAllContents('books');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
