import { Post, PostType } from '@/types/post';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const getDir = (type: PostType) => join(process.cwd(), `__contents/${type}`);

const getPost = (type: PostType, slug: string) => {
  const contentDir = getDir(type);

  const slugWithoutExtension = slug.replace(/\.mdx$/, '');
  const fullPath = join(contentDir, `${slugWithoutExtension}.mdx`);
  const fileContents = readFileSync(fullPath, 'utf-8');
  const { content, data } = matter(fileContents);

  return { ...data, slug: slugWithoutExtension, content } as Post;
};

const getAllPosts = (type: PostType) => {
  const contentDir = getDir(type);

  const slugs = readdirSync(contentDir);
  const contents = slugs
    .map((slug) => getPost(type, slug))
    .sort((first, second) => (first.createdAt > second.createdAt ? -1 : 1));

  return contents;
};

export { getPost, getAllPosts };
