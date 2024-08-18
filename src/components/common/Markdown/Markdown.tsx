import React from 'react';
import { markdown } from './Markdown.css';

type MarkdownProps = {
  content: string;
};

function Markdown({ content }: MarkdownProps) {
  return (
    <div className={markdown} dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default Markdown;
