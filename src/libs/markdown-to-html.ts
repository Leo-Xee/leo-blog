import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import addClasses from 'rehype-class-names';
import { unified } from 'unified';
import * as styles from '@/components/common/Markdown/Markdown.css';

const classStyles = {
  'h1,h2,h3,h4,h5,h6': styles.commonHeading,
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

const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(addClasses, classStyles)
    .use(rehypePrettyCode, { theme: 'dracula' })
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
};

export default markdownToHtml;
