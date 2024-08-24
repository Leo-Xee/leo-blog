import React from 'react';

type MarkdownProps = {
  content: string;
};

function Markdown({ content }: MarkdownProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default Markdown;
