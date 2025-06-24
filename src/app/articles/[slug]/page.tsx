import { PostTitle } from '@/components/PostTitle';
import { getAllPosts, getPost } from '@/libs/api';
import { TOC } from '@/components/common/TOC';
import { Template } from '@/components/common/Template';
import { CustomMDXRemote } from '@/components/common/CustomMDXRemote';

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
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

export default async function Article({ params }: Params) {
  const { slug } = await params;
  const post = getPost('articles', slug);

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
  const posts = getAllPosts('articles');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
