import { getAllPosts } from '@/libs/api';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllPosts('articles');
  const problemSolving = getAllPosts('problem-solving');
  const books = getAllPosts('books');

  return [
    {
      url: `https://leo-xee.dev`,
      lastModified: new Date('2024-09-01'),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...articles.map(
      (post) =>
        ({
          url: `https://leo-xee.dev/articles/${post.slug}`,
          lastModified: post.createdAt,
          changeFrequency: 'monthly',
          priority: 0.9,
        }) as MetadataRoute.Sitemap[number]
    ),
    ...problemSolving.map(
      (post) =>
        ({
          url: `https://leo-xee.dev/articles/${post.slug}`,
          lastModified: post.createdAt,
          changeFrequency: 'monthly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number]
    ),
    ...books.map(
      (post) =>
        ({
          url: `https://leo-xee.dev/articles/${post.slug}`,
          lastModified: post.createdAt,
          changeFrequency: 'monthly',
          priority: 0.7,
        }) as MetadataRoute.Sitemap[number]
    ),
  ];
}
