export type PostType = 'articles' | 'problem-solving' | 'books';

export type Post = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  createdAt: string;
  content: string;
};
