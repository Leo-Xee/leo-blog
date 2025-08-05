import { Comments } from '@/components/common/Comments';
import CustomMDXRemote from '@/components/common/CustomMDXRemote/CustomMDXRemote';
import { Template } from '@/components/common/Template';
import { TOC } from '@/components/common/TOC';
import { PostTitle } from '@/components/PostTitle';
import { POST_LIST_SUMMARY } from '@/constants';
import { getAllPosts, getPost } from '@/libs/api';

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost('problem-solving', slug);

  return {
    title: post.title,
    description: POST_LIST_SUMMARY[1].description,
    openGraph: {
      title: post.title,
      description: POST_LIST_SUMMARY[1].description,
    },
    twitter: {
      title: post.title,
      description: POST_LIST_SUMMARY[1].description,
    },
  };
}

export default async function Problem({ params }: Props) {
  const { slug } = await params;
  const post = getPost('problem-solving', slug);

  return (
    <Template.Root>
      <Template.Header>
        <PostTitle post={post} />
      </Template.Header>
      <Template.Main>
        <CustomMDXRemote post={post} />
        <Comments />
      </Template.Main>
      <Template.Aside>
        <TOC post={post} />
      </Template.Aside>
    </Template.Root>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts('problem-solving');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
