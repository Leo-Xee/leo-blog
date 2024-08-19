export type ContentType = 'posts' | 'problem-solving' | 'books';

export type Content = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  createdAt: string;
  content: string;
};
