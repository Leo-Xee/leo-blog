import * as prompts from '@clack/prompts';
import path, { dirname } from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';

const __dirname = dirname(fileURLToPath(import.meta.url));

type PostType = 'article' | 'book' | 'problem-solving';

interface PostConfig {
  templateName: string;
  outputDir: string;
}

const POST_CONFIGS: Record<PostType, PostConfig> = {
  article: {
    templateName: 'article.mdx',
    outputDir: path.join(__dirname, '..', '__contents', 'articles'),
  },
  book: {
    templateName: 'book.mdx',
    outputDir: path.join(__dirname, '..', '__contents', 'books'),
  },
  'problem-solving': {
    templateName: 'problem-solving.mdx',
    outputDir: path.join(__dirname, '..', '__contents', 'problem-solving'),
  },
};

const POST_TYPE_OPTIONS = [
  { value: 'article' as const, label: chalk.yellow('기술 포스트') },
  { value: 'book' as const, label: chalk.cyan('독서 리뷰') },
  { value: 'problem-solving' as const, label: chalk.magenta('알고리즘') },
];

const PLATFORM_OPTIONS = [
  { value: 'baekjoon' as const, label: chalk.blue('백준') },
  { value: 'leetCode' as const, label: chalk.yellow('LeetCode') },
];

function createFrontMatter(title: string, tags: string): string {
  const tagArr = tags
    ? tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];
  const formattedTags = tagArr.map((tag) => `"${tag}"`).join(', ');

  return `---
title: "${title}"
description: ""
thumbnail: ""
tags: [${formattedTags}]
createdAt: "${new Date().toISOString()}"
---
`;
}

function readTemplate(templateName: string): string {
  const templatePath = path.join(__dirname, 'templates', templateName);
  return fs.readFileSync(templatePath, 'utf-8');
}

function writePostFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, 'utf-8');
}

function exitIfCanceled() {
  prompts.cancel('포스트 템플릿 CLI를 종료합니다.');
  process.exit(0);
}

async function createBasePost(type: 'article' | 'book') {
  const { title, slug, tags } = await prompts.group(
    {
      title: () =>
        prompts.text({
          message: '포스트 제목을 입력해주세요.',
          validate(value) {
            if (!value.length) return '포스트 제목의 입력이 필요합니다!';
          },
        }),
      slug: () =>
        prompts.text({
          message: '포스트 파일명을 입력해주세요.',
          placeholder: 'growing-together',
          validate(value) {
            if (!value.length) return '포스트 파일명의 입력이 필요합니다!';
          },
        }),
      tags: () =>
        prompts.text({
          message: '포스트 태그를 입력해주세요.',
          placeholder: 'Frontend, ... (쉽표로 구분)',
          initialValue: '',
        }),
    },
    { onCancel: exitIfCanceled }
  );

  const config = POST_CONFIGS[type];
  const frontMatter = createFrontMatter(title, tags);
  const templateContent = readTemplate(config.templateName);
  const fileContent = `${frontMatter}\n${templateContent}`;
  const filePath = path.join(config.outputDir, `${slug}.mdx`);

  writePostFile(filePath, fileContent);

  const typeLabel = type === 'article' ? 'Article' : 'Book';
  prompts.outro(`✅ ${typeLabel} 템플릿이 성공적으로 생성되었습니다!`);
}

async function createProblemSolvingPost() {
  const { platform, problemId, problemName, tags } = await prompts.group(
    {
      platform: () =>
        prompts.select({
          message: '알고리즘 풀이를 진행한 플랫폼을 선택해주세요.',
          options: PLATFORM_OPTIONS,
        }),
      problemId: () =>
        prompts.text({
          message: '문제의 식별자를 입력해주세요.',
        }),
      problemName: () =>
        prompts.text({
          message: '문제 이름을 입력해주세요.',
        }),
      tags: () =>
        prompts.text({
          message: '포스트 태그를 입력해주세요.',
          placeholder: 'Baekjoon, LeetCode, ... (쉽표로 구분)',
          initialValue: '',
        }),
    },
    { onCancel: exitIfCanceled }
  );

  const config = POST_CONFIGS['problem-solving'];
  let templateContent = readTemplate(config.templateName);

  // TODO: LeetCode 대응 필요
  templateContent = templateContent
    .replace(/문제번호/g, problemId)
    .replace(/문제명/g, problemName);

  const title =
    platform === 'baekjoon'
      ? `백준 ${problemId} - ${problemName}`
      : `LeetCode - ${problemName}`;

  const fileName =
    platform === 'baekjoon' ? `boj-${problemId}.mdx` : `leet-${problemId}.mdx`;

  const frontMatter = createFrontMatter(title, tags);
  const fileContent = `${frontMatter}\n${templateContent}`;
  const filePath = path.join(config.outputDir, fileName);

  writePostFile(filePath, fileContent);

  prompts.outro(`✅ Problem-solving 템플릿이 성공적으로 생성되었습니다!`);
}

async function init() {
  prompts.intro(`
    ██╗     ███████╗ ██████╗        ██████╗ ██╗      ██████╗  ██████╗
    ██║     ██╔════╝██╔═══██╗       ██╔══██╗██║     ██╔═══██╗██╔════╝
    ██║     █████╗  ██║   ██║       ██████╔╝██║     ██║   ██║██║  ███╗
    ██║     ██╔══╝  ██║   ██║       ██╔══██╗██║     ██║   ██║██║   ██║
    ███████╗███████╗╚██████╔╝██╗    ██████╔╝███████╗╚██████╔╝╚██████╔╝
    ╚══════╝╚══════╝ ╚═════╝ ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝
                       *~ Welcome to Leo's Blog ~*
    `);

  const type = await prompts.select({
    message: '작성할 포스트 유형을 선택해주세요.',
    options: POST_TYPE_OPTIONS,
  });

  if (prompts.isCancel(type)) exitIfCanceled();

  if (type === 'article' || type === 'book') {
    await createBasePost(type);
  } else if (type === 'problem-solving') {
    await createProblemSolvingPost();
  }
}

init().catch((e) => {
  console.error(e);
});
