import { getAllPosts, getPost } from '@/libs/api';
import markdownToHtml from '@/libs/markdown-to-html';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: Params) {
  const post = getPost(slug);
  const content = await markdownToHtml(post.content);

  return (
    <main>
      <div
        style={{ width: '768px' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
