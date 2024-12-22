import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Post } from '@/types/post';
import rehypePrettyCode from 'rehype-pretty-code';
import addHeadingSlug from 'rehype-slug';
import autoLinkHeading from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import addClasses from 'rehype-class-names';
import { Blockquote } from '@/components/Blockquote';
import * as styles from './CustomMDXRemote.css';

const components = {
  Blockquote,
};

const classStyles = {
  'h1>a,h2>a,h3>a,h4>a,h5>a,h6>a': styles.headingFragment,
  h1: styles.heading1,
  h2: styles.heading2,
  h3: styles.heading3,
  h4: styles.heading4,
  h5: styles.heading5,
  h6: styles.heading6,
  p: styles.paragraph,
  a: styles.anchor,
  em: styles.emphasis,
  strong: styles.strong,
  del: styles.deletedText,
  ul: styles.unorderedList,
  ol: styles.orderedList,
  img: styles.image,
  'p img': styles.imageContainer,
  'table, th, td': styles.table,
  hr: styles.ThematicBreak,
  'li p': styles.firstListItem,
  'ul.contains-task-list': styles.taskList,
  'h1 ~ ul.contains-task-list': styles.firstTaskList,
  'ul.contains-task-list input[type="checkbox"]': styles.taskListCheckbox,
  'input[type="checkbox"]:checked:disabled': styles.taskListCheckboxDisabled,
};

type CustomMDXRemoteProps = {
  post: Post;
};

async function CustomMDXRemote({ post }: CustomMDXRemoteProps) {
  return (
    <MDXRemote
      source={post.content}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [
            addHeadingSlug,
            [autoLinkHeading, { behavior: 'wrap' }],
            [addClasses, classStyles],
            [
              rehypePrettyCode,
              {
                theme: { light: 'github-light', dark: 'dracula' },
                defaultLang: { inline: 'plaintext', block: 'javascript' },
              },
            ],
          ],
        },
      }}
    />
  );
}

export default CustomMDXRemote;
