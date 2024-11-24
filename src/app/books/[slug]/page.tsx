import { openGraph, twitter } from '@/app/shared-metadata';
import { Markdown } from '@/components/common/Markdown';
import { Template } from '@/components/common/Template';
import { TOC } from '@/components/common/TOC';
import { PostTitle } from '@/components/PostTitle';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts, getPost } from '@/libs/api';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const post = getPost('books', slug);

  return {
    title: post.title,
    description: POST_LIST_SUMMARY[2].description,
    openGraph: {
      ...openGraph,
      title: post.title,
      description: POST_LIST_SUMMARY[2].description,
    },
    twitter: {
      ...twitter,
      title: post.title,
      description: POST_LIST_SUMMARY[2].description,
    },
  };
}

export default async function Book({ params: { slug } }: Params) {
  const post = getPost('books', slug);

  return (
    <Template.Root>
      <Template.Header>
        <PostTitle post={post} />
      </Template.Header>
      <Template.Main>
        <Markdown post={post} />
      </Template.Main>
      <Template.Aside>
        <TOC />
      </Template.Aside>
    </Template.Root>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts('books');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
