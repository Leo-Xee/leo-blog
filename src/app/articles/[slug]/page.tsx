import { Container } from '@/components/common/Container';
import { Markdown } from '@/components/common/Markdown';
import { PostTitle } from '@/components/PostTitle';
import { getAllPosts, getPost } from '@/libs/api';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const post = getPost('articles', slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function Article({ params: { slug } }: Params) {
  const post = getPost('articles', slug);

  return (
    <main>
      <Container>
        <PostTitle post={post} />
        <Markdown post={post} />
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts('articles');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
