import markdownToHtml from '@/libs/markdown-to-html';
import { Post } from '@/types/post';
import React from 'react';

type MarkdownProps = {
  post: Post;
};

async function Markdown({ post }: MarkdownProps) {
  const content = await markdownToHtml(post.content);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default Markdown;
