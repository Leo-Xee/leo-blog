import { Post } from '@/types/post';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDir = join(process.cwd(), 'posts');

const getPostSlugs = () => readdirSync(postsDir);

const getPost = (slug: string) => {
  const slugWithoutExtension = slug.replace(/\.md$/, '');
  const fullPath = join(postsDir, `${slugWithoutExtension}.md`);
  const fileContents = readFileSync(fullPath, 'utf-8');

  const { content, data } = matter(fileContents);

  return { ...data, slug: slugWithoutExtension, content } as Post;
};

const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPost(slug))
    .sort((first, second) => (first.createdAt > second.createdAt ? -1 : 1));

  return posts;
};

export { getPost, getAllPosts };
