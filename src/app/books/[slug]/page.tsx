import { openGraph, twitter } from '@/app/shared-metadata';
import CustomMDXRemote from '@/components/common/CustomMDXRemote/CustomMDXRemote';
import { Template } from '@/components/common/Template';
import { TOC } from '@/components/common/TOC';
import { PostTitle } from '@/components/PostTitle';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts, getPost } from '@/libs/api';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
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

export default async function Book({ params }: Props) {
  const { slug } = await params;
  const post = getPost('books', slug);

  return (
    <Template.Root>
      <Template.Header>
        <PostTitle post={post} />
      </Template.Header>
      <Template.Main>
        <CustomMDXRemote post={post} />
      </Template.Main>
      <Template.Aside>
        <TOC post={post} />
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
