import { openGraph, twitter } from '@/app/shared-metadata';
import { Container } from '@/components/common/Container';
import { Markdown } from '@/components/common/Markdown';
import { PostTitle } from '@/components/PostTitle';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts, getPost } from '@/libs/api';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const post = getPost('problem-solving', slug);

  return {
    title: post.title,
    description: POST_LIST_SUMMARY[1].description,
    openGraph: {
      ...openGraph,
      title: post.title,
      description: POST_LIST_SUMMARY[1].description,
    },
    twitter: {
      ...twitter,
      title: post.title,
      description: POST_LIST_SUMMARY[1].description,
    },
  };
}

export default async function Problem({ params: { slug } }: Params) {
  const post = getPost('problem-solving', slug);

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
  const posts = getAllPosts('problem-solving');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
