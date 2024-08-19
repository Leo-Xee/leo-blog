import { Content, ContentType } from '@/types/content';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const getDir = (type: ContentType) => join(process.cwd(), `__contents/${type}`);

const getContent = (type: ContentType, slug: string) => {
  const contentDir = getDir(type);

  const slugWithoutExtension = slug.replace(/\.md$/, '');
  const fullPath = join(contentDir, `${slugWithoutExtension}.md`);
  const fileContents = readFileSync(fullPath, 'utf-8');
  const { content, data } = matter(fileContents);

  return { ...data, slug: slugWithoutExtension, content } as Content;
};

const getAllContents = (type: ContentType) => {
  const contentDir = getDir(type);

  const slugs = readdirSync(contentDir);
  const contents = slugs
    .map((slug) => getContent(type, slug))
    .sort((first, second) => (first.createdAt > second.createdAt ? -1 : 1));

  return contents;
};

export { getContent, getAllContents };
